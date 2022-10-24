

let btn_navbar = document.querySelector('#menu-btn');
let navbar = document.querySelector('header .navbar');
let close_nav_btn = document.querySelector('#close-navbar');


let login_btn = document.querySelector('.account-form .buttons .btn-login');
let signup_btn = document.querySelector('.account-form .buttons .btn-register');
let login_form = document.querySelector('.account-form .login-form');
let signup_form = document.querySelector('.account-form .register-form');

let open_account = document.querySelector('#account-btn');
let close_form_register = document.querySelector('#close-form');
let account_form = document.querySelector('.account-form');



// close navbar
btn_navbar.addEventListener('click', ()=>{

    navbar.classList.add('active');
})
close_nav_btn.addEventListener('click', ()=>{

    navbar.classList.remove('active');
})//end on click



//toggle between login - signup
signup_btn.addEventListener('click', ()=>{

    signup_btn.classList.add('active');
    login_btn.classList.remove('active');
    signup_form.classList.add('active');
    login_form.classList.remove('active');

})//end on click

login_btn.addEventListener('click', ()=>{

    login_btn.classList.add('active');
    signup_btn.classList.remove('active');
    login_form.classList.add('active');
    signup_form.classList.remove('active');

})//end on click




//open - close register from
open_account.addEventListener('click', ()=>{
    account_form.classList.add('active')
})//end on click
close_form_register.addEventListener('click', ()=>{
    account_form.classList.remove('active')
})//end on click



window.onscroll = function(){
    navbar.classList.remove('active');
    account_form.classList.remove('active');
}


// swiper home slider
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
});


// swiper home-courses slider
var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 4,
      },
    },
});


// swiper teacher-slider slider
var swiper = new Swiper(".teacher-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 4,
      },
    },
});



// swiper reviews-slider slider
var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 4,
      },
    },
});


// swiper logo-slider slider
var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});



//accordion
let All_accordion = document.querySelectorAll('.faq .acordian-container .accordion');

All_accordion.forEach((accordion)=>{
    accordion.addEventListener('click', ()=>{

        All_accordion.forEach((item)=>{item.classList.remove('active')})

        accordion.classList.toggle('active')

    })//end onclock
})//end foreach




// load more courses
let loadmore_btn = document.querySelector('.load-more .btn');
let all_hide_box = document.querySelectorAll('.hide');

loadmore_btn.addEventListener('click' , ()=>{
    all_hide_box.forEach((box)=>{
        box.classList.add('active');
    })
    loadmore_btn.style.display ='none';
})//end of onclick
