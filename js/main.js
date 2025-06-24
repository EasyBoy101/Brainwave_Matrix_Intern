// onScroll navbar
window.addEventListener("scroll", function(){
    let nav = document.querySelector('nav');
    let navLength = window.scrollY > 0
    nav.classList.toggle('scrolling-active', navLength );

})

// onClick seaech icon
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

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    
    if (icon.src.match("./images/icons/4489231.png")){
        icon.src = "./images/icons/brightness.png";
    }
    else{
        icon.src = "./images/icons/4489231.png"
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






















// function test(){
//     var tabsNewAnim = $('#navMenu');
//     var selectorNewAnim = $('#navMenu').find('li').length;
//     var activeItemNewAdmin = tabsNewAnim.find('.active');
//     var activeWidthNewAnimHeight = activeItemNewAdmin.innerHeight();
//     var activeWidthNewAnimWidth = activeItemNewAdmin.innerWidth();
//     var itemPosNewAnimTop = activeItemNewAdmin.position();
//     var itemPosNewAnimLeft = activeItemNewAdmin.position();
//     $('.nav-selector').css({
//         'top':itemPosNewAnimTop + 'px',
//         'left':itemPosNewAnimLeft + 'px',
//         'height':activeWidthNewAnimHeight + 'px',
//         'width':activeWidthNewAnimWidth + 'px',
//     })

//     $('#navMenu').on('click', 'li', function(e){
//         $('#navMenu ul li').removeClass('active');
//         $(this).addClass('active');
//         var activeWidthNewAnimHeight = $(this).innerHeight();
//         var activeWidthNewAnimWidth = $(this).innerWidth();
//         var itemPosNewAnimTop = $(this).position();
//         var itemPosNewAnimLeft = $(this).position();
//         $(".nav-selector").css({
//             'top':itemPosNewAnimTop.top +'px',
//             'left':itemPosNewAnimLeft.left + 'px',
//             'height':activeWidthNewAnimHeight + 'px',
//             'width':activeWidthNewAnimWidth + 'px'   
//         })
//     })
// }
// $(document).ready(function(){
//     setTimeout(function() { test(); });

// })
// $(window).on('resize', function(){
//     setTimeout(function() { test(); }, 500);
// })
// $('.navbar-toggler').click(function(){
//     setTimeout(function() { test(); })
// })


















// const hamburger = document.querySelectorAll('.hamburger');
// const navbar = document.querySelectorAll('.navbar-nav');

// hamburger.addEventListener("click", () =>{
//     hamburger.classList.toggle('active');
//     navbar.classList.toggle('active');
// })

// // init Isotope
// var $grid = $('.grid').isotope({
//     // options
//   });
//   // filter items on button click
//   $('.filter-button-group').on( 'click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });

