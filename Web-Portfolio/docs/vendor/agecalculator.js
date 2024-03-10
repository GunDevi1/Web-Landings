let date = new Date()
const age_input = document.querySelector('.age__input-date')
const age_text = document.querySelector('.age__text')

function calculateDate(event) {
	if (event.key === 'Enter' && age_input.value.split('-')) {
		getDate()
	}
}

function getDate() {
	selectDate = age_input.value.split('-')
	currentDate = date.toISOString().substring(0, 10).split('-')
	years = currentDate[0] - selectDate[0]
	if (selectDate[0].length === 0) {
		age_text.innerHTML = 'Choose the date'
	} else {
		if (years < 0) {
			age_text.innerHTML = 'You are not existing :)'
		} else {
			if (
				currentDate[1] - selectDate[1] < 0 ||
				(currentDate[1] - selectDate[1] == 0 &&
					currentDate[2] - selectDate[2] < 0)
			) {
				years -= 1
				months = currentDate[1] - selectDate[1] + 12
			} else {
				months = currentDate[1] - selectDate[1]
			}
			if (currentDate[2] - selectDate[2] < 0) {
				months -= 1
				days = currentDate[2] - selectDate[2] + 31
			} else {
				days = currentDate[2] - selectDate[2]
			}
			age_text.innerHTML = `Your age is <span class="age__date-style">${years}</span> years, <span class="age__date-style">${months}</span> months and <span class="age__date-style">${days}</span> days`
		}
	}
}
