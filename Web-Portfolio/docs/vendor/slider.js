const changeType = document.querySelector('.change-type-button')
const mainBlock = document.querySelector('.slider__main-block')
const changeTypeBlock = document.querySelector('.input-type-change')
const submitButton = document.querySelector('.sign-in-button')
const typeText = document.getElementById('type')
const greetings = document.getElementById('greetings')
const forgot = document.querySelector('.forgot-password-button')
const mark = document.querySelector('.slider__data-text')
const subgreetings = document.getElementById('subgreetings')
const inputGroup = document.querySelector('.input-group')

let changeFlag = true

changeType.addEventListener('click', function () {
	if (changeFlag) {
		changeToSignUp()
	} else {
		changeToSignIn()
	}

	changeFlag = !changeFlag
})

function changeToSignUp() {
	mainBlock.classList.add('change-type-class')
	changeTypeBlock.classList.add('changed__input-change-block')
	typeText.textContent = 'Create Account'
	greetings.textContent = 'Welcome Back!'
	forgot.classList.add('hidden')
	submitButton.textContent = 'SIGN UP'
	mark.textContent = 'or for registration'
	subgreetings.textContent =
		'Enter your personal details to use all of site features'
	changeType.textContent = 'SIGN IN'
	addInput()
}

function changeToSignIn() {
	mainBlock.classList.remove('change-type-class')
	changeTypeBlock.classList.remove('changed__input-change-block')
	typeText.textContent = 'Sign In'
	changeType.textContent = 'SIGN UP'
	greetings.textContent = 'Hello, Friend!'
	submitButton.textContent = 'SIGN IN'
	mark.textContent = 'Use your email and password for sign in'
	subgreetings.textContent =
		'Register with your personal details to use all of site features'
	forgot.classList.remove('hidden')
	removeInput()
}

function addInput() {
	const input = document.createElement('input')
	input.classList.add('slider__data-input', 'name-input')
	input.placeholder = 'Name'
	const firstInput = inputGroup.querySelector('.slider__data-input')
	inputGroup.insertBefore(input, firstInput)
}

function removeInput() {
	const input = document.querySelector('.name-input')
	input.remove()
}
