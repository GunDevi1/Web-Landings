const options = document.querySelectorAll('.active')
const result = document.querySelector('.result')

options.forEach(option =>
	option.addEventListener('click', function () {
		if (result.textContent == 0 || result.textContent == 'Error') {
			result.textContent = ''
		}
		result.textContent += option.textContent
	})
)

const clear = document.querySelector('.clear')

clear.addEventListener('click', function () {
	result.textContent = 0
})

const backspace = document.querySelector('.backspace')

backspace.addEventListener('click', function () {
	if (result.textContent.length == 1 || result.textContent == 'Error') {
		result.textContent = 0
	} else {
		result.textContent = result.textContent
			.toString()
			.substring(0, result.textContent.length - 1)
	}
})

const equal = document.querySelector('.equal')

equal.addEventListener('click', function () {
	try {
		if (result.textContent == 'Error') {
			result.textContent = 0
		} else {
			result.textContent = eval(result.textContent)
		}
	} catch {
		result.textContent = 'Error'
	}
})
