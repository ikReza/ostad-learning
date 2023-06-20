function validateForm() {
  var inputField = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm").value;

  if (!/^[a-zA-Z]+$/.test(inputField)) {
    document.getElementById("errorName").innerHTML =
      "*Please write only letters [A-Za-z]";
    return false;
  } else {
    document.getElementById("errorName").innerHTML = "";
  }

  //   Check Password Validity
  if (password.length < 8) {
    document.getElementById("errorPass").innerHTML =
      "*Password must have a minimum length of 8 characters.";
    return false;
  } else {
    document.getElementById("errorPass").innerHTML = "";
  }

  if (!/[A-Z]/.test(password)) {
    document.getElementById("errorPass").innerHTML =
      "*Password must contain at least one uppercase letter.";
    return false;
  } else {
    document.getElementById("errorPass").innerHTML = "";
  }

  if (!/[a-z]/.test(password)) {
    document.getElementById("errorPass").innerHTML =
      "*Password must contain at least one lowercase letter.";
    return false;
  } else {
    document.getElementById("errorPass").innerHTML = "";
  }

  if (!/\d/.test(password)) {
    document.getElementById("errorPass").innerHTML =
      "*Password must contain at least one digit.";
    return false;
  } else {
    document.getElementById("errorPass").innerHTML = "";
  }

  if (password !== confirmPassword) {
    document.getElementById("errorConfirm").innerHTML =
      "*Passwords do not match";
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}

function isMatch() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm").value;
  if (password !== confirmPassword) {
    document.getElementById("errorConfirm").innerHTML =
      "*Passwords do not match";
  } else {
    document.getElementById("errorConfirm").innerHTML = "";
  }
}

const confirmPass = document.getElementById("confirm");
confirmPass.addEventListener("keyup", isMatch);
