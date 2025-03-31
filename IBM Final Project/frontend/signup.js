function togglePassword(){
    let show_password = document.getElementById("password")
    if(show_password.type === "password"){
        if(show_password.type = "text"){
            document.getElementById("hidePassword").style.visibility = "hidden"
        }
    }
    else{
        show_password.type = "password"
        document.getElementById("hidePassword").style.visibility = "visible"
    }
}

function inputFieldAlert(inputId, message){
    let validation = document.getElementById(inputId)
    validation.oninvalid = function(){
        this.setCustomValidity(message);
    }
    validation.oninput = function(){
        this.setCustomValidity("");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    inputFieldAlert("name","Please Enter Your Name")
    inputFieldAlert("email","Please Enter Your email like this (example@email.com)")
    inputFieldAlert("password","Please Enter Your password")
});