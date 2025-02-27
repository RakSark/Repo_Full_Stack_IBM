let form = document.getElementById("userform")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let obj = {
        name, email, phone_number, password, confirm_password
    }

    if(obj.password!==obj.confirm_password){
        return alert("Password do match")
    }

    let tr = document.createElement("tr")
    let td1 = document.createElement("td");
    td1.innerText=obj.name;

    let td2 = document.createElement("td");
    td2.innerText=obj.email;

    let td3 = document.createElement("td");
    td3.innerText=obj.phone_number;

    let td4 = document.createElement("td");
    td4.innerText=obj.password;

    let td5 = document.createElement("td");
    td5.innerText=obj.confirm_password;

    tr.append(td1, td2, td3, td4, td5);

    document.getElementById("tbody").append(tr)

    document.getElementById("name").value
    document.getElementById("email").value;
    document.getElementById("phone_number").value;
    document.getElementById("password").value;
    document.getElementById("confirm_password").value;

})