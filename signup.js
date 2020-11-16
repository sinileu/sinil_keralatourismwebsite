const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
// const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const error = document.getElementById('error');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	// const phonenumberValue = phonenumber.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} 
	else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	// if(phonenumberValue === '') {
	// 	setErrorFor(phonenumber, 'Phonenumber cannot be blank');
	// } else {
	// 	setSuccessFor(phonenumber);
	// }

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// function phonevalidate(){
//   var phoneno =/^\(d{10}$) ^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if(phonenumber.value.match(phoneno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("invalid");
//         return false;
//         }
// }
// function phonevalidation(){}
//   if(phoneNo == ""){
// 	document.getElementById('phoneNo').innerHTML = " ** please enter your phone number";
// 	return false;
//    }

//    if(mobilePattern.test(phoneNo) == true){
// 	document.getElementById('phoneNo').innerHTML = " ** must use digits for phone number";
// 	return false;
//    }

  
//    if (phonePattern.test(phoneNo) == false) {
// 		if ((phoneNo.length != 12 && phoneNo.length != 10)) {
// 			document.getElementById('phoneNo').innerHTML = " ** please enter valid 10 digit phone number";
// 			return false;
// 		}
// 		else {
// 		document.getElementById('phoneNo').innerHTML = " ";
// 	 } 
// 	}
	
function passwordChanged() {
      var strength = document.getElementById('strength');
      var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
      var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
      var enoughRegex = new RegExp("(?=.{6,}).*", "g");
      var pwd = document.getElementById("password");
      if (pwd.value.length == 0) {
          strength.innerHTML = 'Type Password';
		  return false;
		}
		 else if (pwd.value.length <=7) {
			strength.innerHTML = 'Password must be 8 characters long';
			return false;
      } else if (false == enoughRegex.test(pwd.value)) {
          strength.innerHTML = 'More Characters';
          return false;
      } else if (strongRegex.test(pwd.value)) {
          strength.innerHTML = '<span style="color:green">Strong!</span>';
          return true;
      } else if (mediumRegex.test(pwd.value)) {
          strength.innerHTML = '<span style="color:orange">Medium!</span>';
          return false;
      } else {
          strength.innerHTML = '<span style="color:red">Weak!</span>';
          return false;
      }
    }