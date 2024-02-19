const header = document.querySelector('.header')
const scrollUp = document.querySelector('.scrollup')
const scrollTop = 0

window.addEventListener('scroll', function () {
	let currentScroll = window.pageYOffset || document.documentElement.scrollTop
	if (currentScroll > scrollTop) {
		header.classList.add('header__scrolled')
		scrollUp.classList.add('show-scroll')
	} else {
		header.classList.remove('header__scrolled')
		scrollUp.classList.remove('show-scroll')
	}
})

const button = document.querySelector('.nav__toggle')
const close = document.querySelector('.nav__close')
const headerMenu = document.querySelector('.nav__menu')

button.addEventListener('click', function () {
	headerMenu.classList.add('show-menu')
})

close.addEventListener('click', function () {
	headerMenu.classList.remove('show-menu')
})
