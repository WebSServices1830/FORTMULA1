package org.showcard.tcptunnel;

public class TunnelEnvironment
{
	public static void main(String[] args)
	{
		TCPProxy proxy = new TCPProxy(80, "tullave.enccompany.com");
		proxy.start();
	}
}
