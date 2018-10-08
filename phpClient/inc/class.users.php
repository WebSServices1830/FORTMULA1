<?php
class uberUsers
{
	public function IsValidEmail($email)
	{
		if (filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			return true;
		}
		return false;
	}

	public function IsValidName($nm = '')
	{
		if (preg_match('/^[a-z0-9\d-.,;:!?@]+$/i', $nm) && strlen($nm) >= 3 && strlen($nm) <= 14)
		{
			return true;
		}

		return false;
	}

	public function IsNameTaken($nm = '')
	{
		return ((mysqli_num_rows(dbquery("SELECT null FROM users WHERE username = '" . $nm . "' LIMIT 1")) > 0) ? true : false);
	}

	public function IsEmailTaken($nm = '')
	{
		return ((mysqli_num_rows(dbquery("SELECT null FROM users WHERE mail = '" . $nm . "' LIMIT 1")) > 0) ? true : false);
	}

	public function IdExists($id = 0)
	{
		return ((mysqli_num_rows(dbquery("SELECT null FROM users WHERE id = '" . $id . "' LIMIT 1")) > 0) ? true : false);
	}

	/**************************************************************************************************/

	function ValidateUser($username, $password)
	{
		
	}

	static function User2id($username = '')
	{
		return intval(dbqueryEvaluate("SELECT id FROM users WHERE username = '" . $username . "' LIMIT 1"));
	}
	/**************************************************************************************************/
}

?>
