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


// onScroll navbar
window.addEventListener("scroll", function(){
    let nav = document.querySelector('nav');
    let navLength = window.scrollY > 0
    nav.classList.toggle('scrolling-active', navLength );

})

// Go to top
const toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300){
        toTop.classList.add("active")
    }
    else{
        toTop.classList.remove("active");
    }
})

// onClick search icon
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// onScroll transitions / translate 

window.addEventListener("scroll", reveal);

        function reveal(){
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++){
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 150;

                if(revealTop < windowHeight - revealPoint){
                    reveals[i].classList.add("scroll-active");
                }
                else{
                    reveals[i].classList.remove("scroll-active");
                }

            
            }
        }



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

// load more
let loadMoreBtn = document.querySelector("#loadBtn");
let currentItem = 4;

loadMoreBtn.onclick = () =>{
    let items = [...document.querySelectorAll("#categories .container .categories-list .item")];
    for(var i = currentItem; i < currentItem + 4; i++){
        items[i].style.display = 'inline-block'
    }
    currentItem += 4;
    if(currentItem >=items.length){
        loadMoreBtn.style.display = "none"
    }
}


// onClick select category
const btns = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".item");
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






















