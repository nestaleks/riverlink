// слайдер
const swiper = new Swiper('.reviews__slider', {
    // закільцьоване обертання слайдів
    loop: true,
    //відображена кількість слайдів
    slidesPerView: 2,
    spaceBetween: 22,
    // стрілки навігації
    navigation: {
      nextEl: '.reviews__item-next',
      prevEl: '.reviews__item-prev',
    },
  
  });

// мобільне меню
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

const menuClose = document.querySelector('.menu__close');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu-open');
});
menuClose.addEventListener('click', ()=>{
    menuShadow.classList.remove('menu-open');
});