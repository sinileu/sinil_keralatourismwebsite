function  validateForm(){
    var username = document.getElementById("username");
    
    var password = document.getElementById("password");
    
    
        function caller(username,password,callback){
            err=0;
        if((username.value=="admin")&&(password.value==12345)){
            document.location.href="index.html";
            err=success;
            callback(username,password,err);
            alert(err);
            return err;
        }
        else{
        err=false;
        alert("invalid credentials");
        return err;
        }
        }
        caller(username,password,function(error){
          console.log(error);
        })
    }
    
    