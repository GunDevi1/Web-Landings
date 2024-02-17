const slideUp = {
	distance: '25%',
	origin: 'bottom',
	duration: 3000,
	delay: 300,
	opacity: 0,
}

const slideDown = {
	distance: '25%',
	origin: 'top',
	duration: 3000,
	delay: 300,
	opacity: 0,
	interval: 300,
}

const slideRight = {
	distance: '50%',
	origin: 'left',
	duration: 3000,
	delay: 300,
	opacity: 0,
}

const slideLeft = {
	distance: '50%',
	origin: 'right',
	duration: 3000,
	delay: 300,
	opacity: 0,
}

ScrollReveal().reveal('.home__text', slideUp)
ScrollReveal().reveal('.home__images', slideDown)
ScrollReveal().reveal('.sponsor__label', {
	distance: '75%',
	origin: 'top',
	duration: 3000,
	delay: 350,
	opacity: 0,
	interval: 300,
})

ScrollReveal().reveal('.title', {
	distance: '75%',
	origin: 'bottom',
	duration: 2000,
	delay: 100,
	opacity: 0,
})

ScrollReveal().reveal('.spec', {
	distance: '50%',
	origin: 'left',
	duration: 3000,
	delay: 300,
	opacity: 0,
	interval: 300,
})

ScrollReveal().reveal('.spec__img', slideLeft)
ScrollReveal().reveal('.case__data', slideLeft)
ScrollReveal().reveal('.case__img', slideRight)

ScrollReveal().reveal('.discount__img', slideLeft)
ScrollReveal().reveal('.discount__animate', slideRight)

ScrollReveal().reveal('.products__item', {
	distance: '25%',
	origin: 'top',
	duration: 3000,
	delay: 350,
	opacity: 0,
	interval: 300,
})

ScrollReveal().reveal('.footer__content', slideDown)

ScrollReveal().reveal('.home__animated', {
	distance: '10%',
	origin: 'bottom',
	duration: 3000,
	delay: 500,
	opacity: 0,
})
