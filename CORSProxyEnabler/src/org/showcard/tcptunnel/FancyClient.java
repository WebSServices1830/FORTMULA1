package org.showcard.tcptunnel;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class FancyClient
{
	private InputStream sInput;
	private OutputStream sOutput;
	private Socket socket;
	private byte[] dataBuffer;

	private String host;
	private int port;

	private ClientMessageHandler clientMessageHandler;

	public interface ClientMessageHandler
	{
		void handleClientMessage(byte[] bytes, int length);

		void writeLine(String line);
	}

	public FancyClient(String host, int port, ClientMessageHandler clientMessageHandler)
	{
		this.host = host;
		this.port = port;
		this.dataBuffer = new byte[4096];
		this.clientMessageHandler = clientMessageHandler;
	}

	public boolean isConnected()
	{
		return (socket != null && socket.isConnected());
	}

	public boolean start()
	{
		try
		{
			socket = new Socket(host, port);
		}
		// if it failed not much I can so
		catch (Exception ec)
		{
			System.out.println("Error connecting to server:" + ec);
			return false;
		}
		System.out.println("Connected to " + host + ":" + port);
		try
		{
			sInput = socket.getInputStream();
			sOutput = socket.getOutputStream();
		} catch (IOException e)
		{
			System.out.println("Exception creating new Input/output Streams: " + e);
			return false;
		}

		new ListenFromServer().start();
		return true;

	}

	public boolean send(byte[] bytes, int size)
	{
		if (!socket.isConnected())
		{
			close();
			return false;
		}
		// write the message to the stream
		try
		{
			sOutput.write(bytes, 0, size);
		}
		// if an error occurs, do not abort just inform the user
		catch (IOException e)
		{
			System.out.println("Error sending message: " + e);
			return false;
		}
		return true;
	}

	public void close()
	{
		// try to close the connection
		try
		{
			if (sOutput != null)
				sOutput.close();
		} catch (Exception e)
		{
		}
		try
		{
			if (sInput != null)
				sInput.close();
		} catch (Exception e)
		{
		}
		;
		try
		{
			if (socket != null)
				socket.close();
		} catch (Exception e)
		{
		}
	}

	class ListenFromServer extends Thread
	{
		public void run()
		{
			int receivedBytes;
			while (true)
			{
				try
				{
					receivedBytes = sInput.read(dataBuffer);
					//System.out.println("Received " + receivedBytes + " bytes");
					if (receivedBytes == -1)
					{
						break;
					}
				} catch (IOException e)
				{
					System.out.println("Exception reading streams: " + e);
					break;
				}

				clientMessageHandler.handleClientMessage(dataBuffer, receivedBytes);
			}
			close();
		}
	}
}