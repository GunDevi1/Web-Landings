const menuButton = document.querySelector('.header__menu')
const header = document.querySelector('.header')

menuButton.addEventListener('click', () => {
	header.classList.toggle('showed')
	document.body.style.overflow = header.classList.contains('showed')
		? 'hidden'
		: 'auto'
})

const listButtons = document.querySelectorAll('.list-button')

listButtons.forEach(button => {
	button.addEventListener('click', () => {
		const listItems =
			button.parentElement.parentElement.querySelectorAll('.footer__list-item')
		listItems.forEach(item => {
			if (item.style.display === 'none' || item.style.display === '') {
				item.style.display = 'block'
			} else {
				item.style.display = 'none'
			}
		})
	})
})
