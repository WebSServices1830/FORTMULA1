<?php

class ProxyCore 
{
    private $wsdlUrl;

    public function __construct($wsdlUrl)
    {
        $this->wsdlUrl = $wsdlUrl;
    }

    function ValidateUser($username, $password) 
    {
        return false;
    }
}


?>