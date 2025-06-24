let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


cartIcon.onclick = (event) =>{
    event.preventDefault();
    cart.classList.add("active");
}
closeCart.onclick = (event) =>{
    event.preventDefault();
    cart.classList.remove("active");
}

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);

}
else{
    ready();
}


function ready(){
    var removeCartBtns =document.getElementsByClassName("cart-remove")

    for(var i = 0; i < removeCartBtns.length; i++){
        var button = removeCartBtns[i]
        button.addEventListener("click", removeCartItem)
    }

    // quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);

    }
    // add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
    // buy btn
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);

    

}
function buyButtonClicked(){
    alert("your order has been placed")
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// remove from cart
function removeCartItem(event){
    event.preventDefault()
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
function quantityChanged(event){
    event.preventDefault()
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal()
}
const addCart = document.querySelectorAll('.add-cart');
const cartShow = document.querySelector('#cartCount')
var count = 0;
for(var i = 0; i < addCart.length; i++){
    addCart[i].addEventListener('click', () =>{
        cartCount();
    })
}

function cartCount(){
    let productCount = localStorage.getItem("cartsCount");
    productCount =parseInt(productCount);
    if(productCount){
        localStorage.setItem("cartCount", productCount+1);
        count++
        cartShow.innerHTML = count;
    }else{
        localStorage.setItem('cartsCount', 1);
        cartShow.innerHTML = count;
    }

// function displayCart(){
//     let productCount = localStorage.getItem("cartsCount");
//     if(productCount){
//         cartShow.textContent =productCount ;

//     }
// }
// displayCart()


}

// add to cart
function addCartClicked(event){
    event.preventDefault()
    swal({
        title: 'This Item',
        text: 'has been added to cart!',
        icon: 'success',
        button: 'OK'
    });
    document.getElementById('info').style.display = "none";
    
    var button = event.target
    var shopProducts = button.parentElement.parentElement.parentElement.parentElement
    // var cartNum= document.getElementById("cartCount");
    // cartNum = parseInt(cartNum);
    // var count = 0;
    // cartNum.innerHTML = count++;
    
    // var product = button.parentElement.parentElement.parentElement.parentElement
    var title = shopProducts.getElementsByClassName("header-text")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    // console.log(title, price, productImg);
    addProductToCart(title, price, productImg);
    updateTotal();

}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            swal({
                title: "This Item",
                text: "has already been added to cart!",
                icon: "warning",
                button: "OK"

            });
            return;
        }
    }
    var cartBoxContent = `

                        <img src="${productImg}" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa fa-trash cart-remove"></i>`;    
                        

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener("change", quantityChanged);


}
// update total
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }    
        // approximation to two decimal places
            total = Math.round(total * 100) / 100;
        
        document.getElementsByClassName("total-price")[0].innerText = '$' + total;



}