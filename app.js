 //****class ve id ye ulaşma */
 const searchForm = document.querySelector(".search-form");
 const cartItem = document.querySelector(".card-items-container");
 const navbar = document.querySelector(".navbar");
 
 //! BUTTONS
 const searchBtn = document.querySelector("#search-btn");
 const cardBtn = document.querySelector("#cart-btn");
 const menuBtn = document.querySelector("#menu-btn");

 //*click olayı gerçekleştireceğiz searchBtn'e active ekleyeceğiz */
 searchBtn.addEventListener("click", function(){

 });

 cardBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if (
            !e.composedPath().includes(cardBtn) &&
            !e.composedPath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }
    })
 });
 

 menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    })
 });