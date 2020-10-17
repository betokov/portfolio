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


	//!Progressbar for skills
	let progressBar = {
		color: '#5b4c5c',
		strokeWidth: 4,
		trailWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: {
			color: '#aaa',
			width: 3
		},
		to: {
			color: '#fff',
			width: 4
		},
		// Set default step function for all animate calls
		step: function (state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 100);
			if (value === 0) {
				circle.setText('');
			} else {
				circle.setText(value + "%");
			}

		}
	};

	let editorSkill = new ProgressBar.Circle(".skills__skill_editor", progressBar),
		htmlSkill = new ProgressBar.Circle(".skills__skill_html", progressBar),
		cssSkill = new ProgressBar.Circle(".skills__skill_css", progressBar),
		preprocessSkill = new ProgressBar.Circle(".skills__skill_preproccess", progressBar),
		jsSkill = new ProgressBar.Circle(".skills__skill_js", progressBar),
		jquerySkill = new ProgressBar.Circle(".skills__skill_jquery", progressBar),
		gulpSkill = new ProgressBar.Circle(".skills__skill_gulp", progressBar),
		phpSkill = new ProgressBar.Circle(".skills__skill_php", progressBar);


	editorSkill.animate(0.5);
	htmlSkill.animate(0.9);
	cssSkill.animate(0.7);
	preprocessSkill.animate(0.7);
	jquerySkill.animate(0.6);
	jsSkill.animate(0.6);
	gulpSkill.animate(0.5);
	phpSkill.animate(0.3);

} //END ONLOAD