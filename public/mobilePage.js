const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector('body');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function(){
    if(header.classList.contains('open')){
        body.classList.remove("noScroll");
        header.classList.remove("open");
        fadeElms.forEach(function(element){
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        })
    }else{
        body.classList.add("noScroll");
        header.classList.add("open");
        fadeElms.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in")
        })
    }
})