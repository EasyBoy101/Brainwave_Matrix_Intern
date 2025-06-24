// loader
var loader;
function loadNow(opacity){
    if(opacity <= 0){
        displayContent();

    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.1)
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
    
    if (icon.src.match("./images/dark.png")){
        icon.src = "./images/brightness.png";
    }
    else{
        icon.src = "./images/dark.png"
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

// inner text onclick change
function inner(){
    var text = document.getElementById('shipping');
    text.innerHTML = "CALCULATING...";
    text.classList.add("active");
}    
        

