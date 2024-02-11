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

//документи
$(document).ready(function() {
	$('.popup__link').magnificPopup({
		disableOn: 900,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.documents__items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});