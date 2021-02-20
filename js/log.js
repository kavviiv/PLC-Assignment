var count= 2;
function logc()
{
	var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
	var usernameArray = ["Cust"];
	var passwordArray = ["12345"];
	for (var i = 0; i < usernameArray.length; i++)
 {
	if ((un == "Cust") && (pw == "12345"))
	{
		valid = true;

		break;
	}
}
	if (valid)
	{
		alert("Login was successful");
		window.location = "main.html";
		return false;
	}


	var again = " tries";
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Wrong password or username")
		count--;
	}
	else
	{
		alert("Incorrect password or username you are now blocked");
		document.login.username.value = "You are now Blocked";
		document.login.password.value = "No you can't see this";
		document.login.username.disabled = true;
		document.login.password.disabled = true;
		return false;
	}
}