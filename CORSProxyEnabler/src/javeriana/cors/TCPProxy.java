package javeriana.cors;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TCPProxy {
    // private Scanner scanner;

    private static int uniqueId;
    private int serverPort;
    private int proxyPort;
    private boolean alive;
    private List<ClientThread> clients;
    private String proxyHost;

    public TCPProxy(int serverPort, String proxyHost, int proxyPort) {
        // scanner = new Scanner(System.in);
        this.serverPort = serverPort;
        this.proxyPort = proxyPort;
        this.alive = false;
        this.clients = new ArrayList<ClientThread>();
        this.proxyHost = proxyHost;
    }

    public void start() {
        alive = true;

        /* create socket server and wait for connection requests */
        try {
            // the socket used by the server
            ServerSocket serverSocket = new ServerSocket(proxyPort);
            // infinite loop to wait for connections
            System.out.println("Listening on " + proxyPort + "...");
            while (alive) {
                Socket socket = serverSocket.accept(); // accept connection

                if (!alive) {
                    break;
                }

                ClientThread client = new ClientThread(socket);
                clients.add(client);
                client.start();
            }
            serverSocket.close();
        } // something went bad
        catch (IOException e) {
            System.out.println(e.toString());
        }
    }

    class ClientThread extends Thread implements FancyClient.ClientMessageHandler {
        // the socket where to listen/talk

        Socket socket;
        InputStream sInput;
        OutputStream sOutput;
        byte[] dataBuffer;
        FancyClient relayClient;
        // my unique id (easier for deconnection)
        int id;

        // Constructore
        ClientThread(Socket socket) {
            // a unique id
            id = ++uniqueId;
            this.socket = socket;
            this.dataBuffer = new byte[4096];

            /* Creating both Data Stream */
            try {
                // create output first
                sOutput = socket.getOutputStream();
                sInput = socket.getInputStream();

                System.out.println("New client connected! (" + socket.getInetAddress().toString() + ")");

                this.relayClient = new FancyClient(proxyHost, serverPort, this);
                this.relayClient.start();

                System.out.println("Relay client started");
            } catch (IOException e) {
                return;
            }
        }

        // what will run forever
        public void run() {
            // to loop until LOGOUT
            boolean keepGoing = true;
            int receivedBytes;
            while (keepGoing) {
                // read a String (which is an object)
                try {
                    receivedBytes = sInput.read(dataBuffer);
                    // System.out.println("Received " + receivedBytes + "
                    // bytes");
                    if (receivedBytes == -1) {
                        break;
                    }
                } catch (IOException e) {
                    System.out.println("Exception reading streams: " + e);
                    this.close();
                    break;
                }
                // the messaage part of the ChatMessage
                handleMessage(dataBuffer, receivedBytes, this);

            }
            // remove myself from the arrayList containing the list of the
            // connected Clients
            remove(id);
            close();
        }

        // try to close everything
        private void close() {
            // try to close the connection
            try {
                if (sOutput != null) {
                    sOutput.close();
                }
            } catch (Exception e) {
            }
            try {
                if (sInput != null) {
                    sInput.close();
                }
            } catch (Exception e) {
            }
            try {
                if (socket != null) {
                    socket.close();
                }
            } catch (Exception e) {
            }
        }

        /*
		 * Write a String to the Client output stream
         */
        private boolean send(byte[] bytes, int size) {
            // if Client is still connected send the message to it
            if (!socket.isConnected()) {
                close();
                return false;
            }
            // write the message to the stream
            try {
                sOutput.write(bytes, 0, size);
            } // if an error occurs, do not abort just inform the user
            catch (IOException e) {
                System.out.println("Error sending message: " + e);

                return false;
            }
            return true;
        }

        @Override
        public void handleClientMessage(byte[] bytes, int length) {
            try {
                byte[] bytesToSend = Arrays.copyOf(bytes, length);

                String text = new String(bytesToSend);

                //byte[] bytesToInject = "Access-Control-Allow-Origin: *\r\n".getBytes("US-ASCII");
                //int bytesBreakpoint = text.indexOf("\r\n");
                text = text.replace("\r\nDate:", "\r\nAccess-Control-Allow-Origin: *\r\nAccess-Control-Allow-Headers: *\r\nAccess-Control-Allow-Methods: POST, GET, OPTIONS\r\nDate:");

                //System.out.println("<--");
                //System.out.println(text);
                bytesToSend = text.getBytes("US-ASCII");

                send(bytesToSend, bytesToSend.length);
            } catch (UnsupportedEncodingException ex) {
                Logger.getLogger(TCPProxy.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

        @Override
        public void writeLine(String line) {
            System.out.println("Client: " + line);
        }

    }

    private void handleMessage(byte[] bytes, int length, ClientThread sender) {
        byte[] bytesToSend = Arrays.copyOf(bytes, length);
        String clientRequest = new String(bytesToSend);

        if (clientRequest.startsWith("OPTIONS ")) {
            /*String response = "HTTP/1.1 200 OK\r\nAccess-Control-Allow-Origin: *\r\nAccess-Control-Allow-Methods: POST, GET, OPTIONS\r\nAccess-Control-Allow-Headers: *\r\n";
            byte[] responseBytes;
            try {
                responseBytes = response.getBytes("US-ASCII");
                sender.send(responseBytes, responseBytes.length);
            } catch (UnsupportedEncodingException ex) {
                Logger.getLogger(TCPProxy.class.getName()).log(Level.SEVERE, null, ex);
            }*/
            
            clientRequest = "GET" + clientRequest.substring(7);
        }
        
        try {
            bytesToSend = clientRequest.getBytes("US-ASCII");
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(TCPProxy.class.getName()).log(Level.SEVERE, null, ex);
        }
        //System.out.println("-->");
        //System.out.println(new String(bytesToSend));
        
        sender.relayClient.send(bytesToSend, bytesToSend.length);
    }

    // for a client who logoff using the LOGOUT message
    synchronized void remove(int id) {
        // scan the array list until we found the Id
        System.out.println("Client disconnected!");
        for (int i = 0; i < clients.size(); ++i) {
            ClientThread ct = clients.get(i);
            // found it
            if (ct.id == id) {
                clients.remove(i);
                return;
            }
        }
    }

}
