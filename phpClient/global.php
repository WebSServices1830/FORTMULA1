<?php
// ############################################################################
// Prepare the local environment
define('UBER', true);
define('INCLUDES', dirname(__FILE__) . DIRECTORY_SEPARATOR . 'inc' . DIRECTORY_SEPARATOR);

date_default_timezone_set('America/Bogota');
setlocale(LC_TIME, "Spanish_Colombia");

//error_reporting(E_ALL);
@session_start();

// ############################################################################
// Initialize core classes
require_once INCLUDES . "class.core.php";
require_once INCLUDES . "class.users.php";
require_once INCLUDES . "classes.soap.php";
require_once INCLUDES . "soap.functions.php";

$core = new uberCore();
$users = new uberUsers();
$proxy = new Proxy("http://localhost:8080/Services/Services?wsdl");

// ############################################################################
// Execute some required core functionality

$core->ParseConfig();
//$db = new MySQL($core->config['MySQL']['hostname'], $core->config['MySQL']['username'],	$core->config['MySQL']['password'], $core->config['MySQL']['database']);
//$db->Connect();

// ############################################################################
// Session handling
if (isset($_SESSION['UBER_TOKEN'])) {
	//Validate user data...

	define('LOGGED_IN', true);
} else {
	define('LOGGED_IN', false);	
}

/*
if (isset($_SESSION['UBER_USER_E']) && isset($_SESSION['UBER_USER_H']))
{
	$userE = $_SESSION['UBER_USER_E'];
	$userH = $_SESSION['UBER_USER_H'];

	$usersql = dbquery("SELECT * FROM users WHERE username = '" . $userE . "' AND password = '" . $userH . "' LIMIT 1");
	$myrow = mysqli_fetch_assoc($usersql);
	if (mysqli_num_rows($usersql) > 0)
	{
		define('LOGGED_IN', true);
		define('USER_NAME', $userE);
		define('USER_ID', $myrow["id"]);
		define('USER_HASH', $userH);
	}
	else
	{
		@session_destroy();
		header('Location: /');
		exit;
	}
}
else
{
	define('LOGGED_IN', false);
	define('USER_NAME', '');
	define('USER_ID', -1);
	define('USER_HASH', null);
}
*/
$core->CheckCookies();

function filter($strInput = '')
{
	return $strInput;
	//global $db;
	//return mysqli_real_escape_string($db->link, trim($strInput));
}
function clean($strInput = '', $ignoreHtml = false, $nl2br = false, $encoding = "UTF-8")
{
	$strInput = stripslashes(trim($strInput));
	if (!$ignoreHtml)
	{
		$strInput = htmlentities($strInput, ENT_COMPAT | ENT_HTML401, $encoding);
	}
	if ($nl2br)
	{
		$strInput = nl2br($strInput);
	}
	return $strInput;
}

?>
