"use strict";

//?JQUERY BLOCK
// $(document).ready(function () {

// }); //END READY

//?JS BLOCK
window.onload = () => {

	//!Menu
	let burger = document.querySelector(".burger"),
		burgerBtn = burger.querySelector(".burger__button"),
		header = document.querySelector(".header"),
		wrapperInner = document.querySelector(".wrapper-inner");

	window.addEventListener("resize", () => {
		if (window.innerWidth >= 1100) {
			burger.classList.remove("burger_active");
			burgerBtn.classList.remove("burger__button_active");
			wrapperInner.classList.remove("wrapper-inner_active");
			header.classList.remove("header_active");
		}
	});

	document.addEventListener("click", (event) => {
		if (!header.contains(event.target) && !burger.contains(event.target)) {
			burger.classList.remove("burger_active");
			burgerBtn.classList.remove("burger__button_active");
			wrapperInner.classList.remove("wrapper-inner_active");
			header.classList.remove("header_active");
		}
	});

	burger.addEventListener("click", function () {
		burger.classList.toggle("burger_active");
		burgerBtn.classList.toggle("burger__button_active");
		wrapperInner.classList.toggle("wrapper-inner_active");
		header.classList.toggle("header_active");
	});

	//? Home Slider
	new Swiper(".home__slider", {
		loop: true,
		effect: "fade",
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		spaceBetween: 10,
		simulateTouch: false,

		autoplay: {
			delay: 5000
		},
	});

	//TODO About Slider
	new Swiper('.about__slider', {
		slidesPerView: 'auto',
		direction: "vertical",
		freeMode: true,
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		mousewheel: true,
	});

} //END ONLOAD