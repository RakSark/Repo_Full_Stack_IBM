let dataincart = JSON.parse(localStorage.getItem("cart_items"));


function showData(array){
    document.getElementById("product").innerHTML = "";
    array.forEach((element, index) => {
        let productboxs = document.createElement("div");
        productboxs.className = "productboxs";

        let name = document.createElement("p");
        name.innerText = element.name;

        let price = document.createElement("p");
        price.innerText = element.price;

        let category = document.createElement("p");
        category.innerText = element.category;

        let image = document.createElement("img");
        image.src = element.image;

        let rating = document.createElement("p");
        rating.innerText = `${element.rating.rate} |  ${element.rating.count} ratings`;

        let button = document.createElement("button");
        button.innerText = "delete"
        button.addEventListener("click",()=>{
          deletedata(element,index);
        });
        
        productboxs.append(category, image, name, price, button)

        document.getElementById("product").append(productboxs);
    });
}

showData(dataincart);

function deletedata(element, index){
    let cartitems = JSON.parse(localStorage.getItem("cart_items"));
    cartitems.splice(index,1);
    localStorage.setItem("cart_items",JSON.stringify(cartitems));
    showData(cartitems);
}

function homepage(){
    window.location.href = "ecom_mainpage.html"
}

// function about(){
//     window.location.href = ""
// }