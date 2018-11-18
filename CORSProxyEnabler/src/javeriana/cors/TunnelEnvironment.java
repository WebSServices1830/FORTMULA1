package javeriana.cors;

public class TunnelEnvironment
{
	public static void main(String[] args)
	{
		TCPProxy proxy = new TCPProxy(8080, "localhost", 1232);
		proxy.start();
	}
}
