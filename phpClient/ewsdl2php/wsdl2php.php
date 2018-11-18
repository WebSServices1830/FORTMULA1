<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<title>Easy WSDL To PHP</title>
</head>
<body>
<?php
if (isset($_POST['url']))
{
 $url = $_POST['url'];
 $sname = $_POST['sname'];
}
else
{
 $url='';
 $sname = '';
}
?>
<h2>Easy WSDL To PHP Generator</h2>
<p> ej. http://www.webservicex.com/globalweather.asmx?WSDL</p>

<form action="wsdl2php.php" method="post">
<p>Url: <input type="text" name="url" size="60" value="<?=$url?>" /></p>
<p>Class Name: <input type="text" name="sname" size="60" value="<?=$sname?>" /></p>

<input type="submit" name="generatebtn" value="Generate Code" />
</form>

<?php if (isset($_POST['generatebtn'])){?>
<form method="post" action="http://thephppro.com/tools/beautify.php">
<textarea rows="10" cols="80" name="code">

<?php
include 'EasyWsdl2PHPLib.php';
echo EasyWsdl2PHP::generate(trim($url),$sname);
?>
</textarea>
</form>
<?php }?>
</body>
</html>
