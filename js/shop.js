// loader
var loader;
function loadNow(opacity){
    if(opacity <= 0){
        displayContent();

    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.5)
        }, 1000);
    }
    
}
function displayContent(){
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    loader = document.getElementById('loader');
    loadNow(1);
})



// onClick search icon
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// Go to top
const toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active")
    }
    else{
        toTop.classList.remove("active");
    }
})


// onClick dark and light mode
var icon = document.getElementById('icon');


icon.onclick = function(event){
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
    
    if (icon.src.match("./images/icons/4489231.png")){
        icon.src = "./images/icons/brightness.png";
    }
    else{
        icon.src = "./images/icons/4489231.png"
    }

}

// quick view
let popupViews = document.querySelector('.popup-view');
let popupCard = popupViews.querySelectorAll('.popup-card');

document.querySelectorAll('.popup-btn').forEach(btn =>{
    btn.onclick = (event) =>{
        event.preventDefault();
        popupViews.style.display = "flex";
        let name = btn.getAttribute('data-name');
        popupCard.forEach(card =>{
        let target = card.getAttribute('data-target');
            if (name == target){
                card.classList.add('active');
            }
        })

    }
    popupCard.forEach(close => {
        close.querySelector('.close-btn').onclick = (event) =>{
            event.preventDefault();
            close.classList.remove('active');
            popupViews.style.display = "none";
        }
    });
});

// load more
let loadMoreBtn = document.querySelector("#loadBtn");
let currentItem = 3;

loadMoreBtn.onclick = (event) =>{
    event.preventDefault();
    let items = [...document.querySelectorAll(".product-items .item")];
    for(var i = currentItem; i < currentItem + 3; i++){
        items[i].style.display = 'inline-block'
    }
    currentItem += 3;
    if(currentItem >=items.length){
        loadMoreBtn.style.display = "none"
    }
}

// // onClick select categories
// const filterBtn = document.querySelectorAll(".filter1");
// const lists = document.querySelectorAll(".product-items .item");
// const loadBtn = document.querySelector("#loadBtn");

// for (i = 0; i < btns.length; i++){
//     filterBtn[i].addEventListener("click", (e) =>{
//         e.preventDefault();

//         loadBtn.style.display = "none"
        
//         const filter = e.target.dataset.filter;
//         // console.log(filter)
//         lists.forEach((product) =>{
//             if (filter == "all"){
//                 product.style.display = "block"
//             }
//             else{
//                 if(product.classList.contains(filter)){
//                 product.style.display = "block"
//                 }
//                 else{
//                 product.style.display = "none"

//                 }
//             }
//         })

        
//     })
// }









// onClick select tags
const btns = document.querySelectorAll(".filter2");
const items = document.querySelectorAll(".product-items .item");
const MoreBtn = document.querySelector("#loadBtn");

for (i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) =>{
        e.preventDefault();

        MoreBtn.style.display = "none"
        
        const filter = e.target.dataset.filter;
        // console.log(filter)
        items.forEach((product) =>{
            if (filter == "all"){
                product.style.display = "block"
            }
            else{
                if(product.classList.contains(filter)){
                product.style.display = "block"
                }
                else{
                product.style.display = "none"

                }
            }
        })

        
    })
}