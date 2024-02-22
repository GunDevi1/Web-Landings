const menuButton = document.querySelector('.header__menu')
const header = document.querySelector('.header')

menuButton.addEventListener('click', () => {
	header.classList.toggle('showed')
	document.body.style.overflow = header.classList.contains('showed')
		? 'hidden'
		: 'auto'
})
