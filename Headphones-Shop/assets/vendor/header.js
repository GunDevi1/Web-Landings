const header = document.querySelector('.header')
const scrollTop = 0

window.addEventListener('scroll', function () {
	let currentScroll = window.pageYOffset || document.documentElement.scrollTop
	if (currentScroll > scrollTop) {
		header.classList.add('header__scrolled')
	} else {
		header.classList.remove('header__scrolled')
	}
})
