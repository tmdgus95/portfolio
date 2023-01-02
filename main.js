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
    if (targetLink === null) {
        return;
    }

    const scrollTo = document.querySelector(targetLink);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});
