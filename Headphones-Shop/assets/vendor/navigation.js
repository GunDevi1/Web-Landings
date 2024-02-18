window.addEventListener('scroll', function () {
	const scrollTopRect = window.pageYOffset || document.documentElement.scrollTop

	const specsTitle = document.querySelector('.specs__title')
	const caseTitle = document.querySelector('.case__title')
	const productsTitle = document.querySelector('.products__title')

	const homeLink = document.querySelector('.home__link')
	const specsLink = document.querySelector('.specs__link')
	const caseLink = document.querySelector('.case__link')
	const productsLink = document.querySelector('.products__link')

	const bodyRect = document.body.getBoundingClientRect()
	const specsRect = specsTitle.getBoundingClientRect()
	const caseRect = caseTitle.getBoundingClientRect()
	const productsRect = productsTitle.getBoundingClientRect()

	const activeLinks = document.querySelectorAll('.active-link')

	activeLinks.forEach(link => {
		link.classList.remove('active-link')
	})

	const SPEC_OFFSET = 200
	const CASE_OFFSET = 200
	const PRODUCTS_OFFSET = 210

	const specTop = -bodyRect.top + SPEC_OFFSET
	const caseTop = -bodyRect.top + CASE_OFFSET
	const productsTop = -bodyRect.top + PRODUCTS_OFFSET

	switch (true) {
		case specTop < specsRect.top + scrollTopRect:
			homeLink.classList.add('active-link')
			break
		case caseTop < caseRect.top + scrollTopRect:
			specsLink.classList.add('active-link')
			break
		case productsTop < productsRect.top + scrollTopRect:
			caseLink.classList.add('active-link')
			break
		default:
			productsLink.classList.add('active-link')
			break
	}
})
