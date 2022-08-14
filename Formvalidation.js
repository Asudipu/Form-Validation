function validation() {
  var user = document.getElementById("user").value;
  var password = document.getElementById("pass1").value;
  var cpassword = document.getElementById("pass2").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;


  //USER VALIDATION...

  if (user == "") {
    document.getElementById("usernames").innerHTML =
      " ** please fill the username field";
    return false;
  } else {
    document.getElementById("usernames").innerHTML = " ";
  }
  if (user.length <= 2 || user.length > 20) {
    document.getElementById("usernames").innerHTML =
      " ** user name must be between 3 and 20";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("usernames").innerHTML =
      " ** Only characters are allowed";
    return false;
  }


  //PASSWORD VALIDATION...
  
  if (password == "") {
    document.getElementById("passwords").innerHTML =
      " ** please fill the username field";
    return false;
  } else {
    document.getElementById("passwords").innerHTML = " ";
  }
  if (password.length <= 5 || user.length > 20) {
    document.getElementById("passwords").innerHTML =
      " ** password length must be betwee 6-15";
    return false;
  }


//CONFIRMPASSWORD VALIDATION...
  if (cpassword == "") {
    document.getElementById("cpasswords").innerHTML =
      " ** please fill the username field";
    return false;
  } else {
    document.getElementById("cpasswords").innerHTML = " ";
  }
  if (cpassword != password) {
    document.getElementById("cpasswords").innerHTML =
      " ** password and cpassword must be same";
    return false;
  }



  //MOBILE VALIDATION...

  if (mobile == "") {
    document.getElementById("mobiles").innerHTML =
      " ** please fill the mobile field";
    return false;
  } else {
    document.getElementById("mobiles").innerHTML = " ";
  }
  if (isNaN(mobile)) {
    document.getElementById("mobiles").innerHTML =
      " ** mobile number contains only numbers";
    return false;
  }
  if (mobile.length != 10) {
    document.getElementById("mobiles").innerHTML =
      " ** mobile number should contains 10 numbers";
    return false;
  }



  //EMAIL VALIDATION...
  
  if (email == "") {
    document.getElementById("emails").innerHTML =
      " ** please fill the email field";
    return false;
  } else {
    document.getElementById("emails").innerHTML = " ";
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("emails").innerHTML = " ** @ position is invalid";
    return false;
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 6) != "."
  ) {
    document.getElementById("emails").innerHTML = " ** . position is invalid";
    return false;
  }
}
