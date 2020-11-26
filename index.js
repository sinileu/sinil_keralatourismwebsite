function checkFunction() {
    
    var check = document.getElementsByTagName("input");
    var count =  0;
    let myPromise = new Promise(function(myResolve, myReject) {
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            count++;
            if(count ==5){
                alert("5 Tasks have been successfully completed.");
                $(".list").toggle(this.disabled);
            }
            else {
                console.log("entered else condition")
              myReject("Error");
           }
        }
       
    }
   });
  }