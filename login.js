const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');


function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
    var str = document.forms["myForm"]["password"].value;
    if (str == "") {
      alert("password must be filled out");
      return false;
    }
    else if(str.length <= 7){
        alert("invalid password");
        return false;
    }
    else{
        return true;
        alert("successfully logined");
    }
  }
