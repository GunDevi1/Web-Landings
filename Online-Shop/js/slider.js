const addSwiper = new Swiper('.mySwiper', {
	spaceBetween: 0,
	loopedSlides: 0,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	slidesPerView: 4,
	loop: true,
	autoplay: {
		delay: 3000,
	},
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		978: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
	initialSlide: 3,
})
