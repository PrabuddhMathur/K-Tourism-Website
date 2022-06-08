function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

function verifyPassword() {  
    var pw = document.getElementById("form2Example28").value;  
    var upperCaseLetters=/[A-Z]/g;
    var lowerCaseLetters=/[a-z]/g;
    var numbers=/[0-9]/g;
    //check empty password field  
    if(pw=="") {  
       alert("Password cannot be empty!");  
    } 
    if (pw.length>8 && pw.value.match(upperCaseLetters) && pw.value.match(lowerCaseLetters) && pw.value.match(numbers)){alert("Password is valid")}
    else{alert("Invalid Password!")}
}