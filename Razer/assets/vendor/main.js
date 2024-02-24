const menuButton = document.querySelector('.header__menu')
const header = document.querySelector('.header')

menuButton.addEventListener('click', () => {
	header.classList.toggle('showed')
	document.body.style.overflow = header.classList.contains('showed')
		? 'hidden'
		: 'auto'
})

const listButtons = document.querySelectorAll('.list-button')
let isListVisible = false

listButtons.forEach(button => {
	button.addEventListener('click', () => {
		const listItems =
			button.parentElement.parentElement.querySelectorAll('.footer__list-item')

		if (!isListVisible) {
			listItems.forEach(item => {
				item.style.display = 'block'
			})
			isListVisible = true
		} else {
			listItems.forEach(item => {
				item.style.display = 'none'
			})
			isListVisible = false
		}
	})
})

window.addEventListener('resize', () => {
	const listItems = document.querySelectorAll('.footer__list-item')

	if (!isListVisible && window.innerWidth > 768) {
		listItems.forEach(item => {
			item.style.display = 'block'
		})
	} else {
		listItems.forEach(item => {
			item.style.display = 'none'
		})
	}
})
