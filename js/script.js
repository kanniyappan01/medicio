let mobileBtn = document.getElementById("mobile-btn");
let mobileNav = document.getElementsByClassName("menu-mid")[0];

mobileBtn.addEventListener("click", () =>
{
    mobileBtn.classList.toggle("active-btns");
    mobileNav.classList.toggle("active-menu");
});

// auto-slider 
document.addEventListener('DOMContentLoaded', function()
{
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        autoplay: 1,
        interval: 6000
    });
    splide.mount();
});