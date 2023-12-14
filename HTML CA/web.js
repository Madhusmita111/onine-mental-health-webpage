function validateform() {
    var username = document.myform.username.value;
    var password = document.myform.password.value;
  
    if (username == null || username == "") {
      alert("Enter Valid Name");
      return false;
    }
    else if (password.length < 8) {
      alert("Password must be atleast of 8 letters.");
      return false;
    }
    else {
      alert("Service Booked Successfully")
  ;    return true;
  }
  }