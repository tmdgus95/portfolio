'use strict';

// 네브바 높이에 따른 투명도
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//네브바 스크롤 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    const targetLink = e.target.dataset.link;
    if (targetLink == null) {
        return;
    }

    scrollIntoView(targetLink);
});

// contact me
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// 홈 투명하게 만들기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selectior) {
    const scrollTo = document.querySelector(selectior);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}
