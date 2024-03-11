let currentPlayer = Math.random() < 0.5
let gameOver = false
let message = document.querySelector('.event__message')

message.textContent = `Move: ${currentPlayer ? 'Cross' : 'Zero'}`

function placeSymbol(id) {
	if (gameOver) {
		return
	}

	let cell = document.getElementById(id)

	if (cell.textContent === '') {
		cell.textContent = currentPlayer ? 'X' : 'O'
		cell.classList.add(currentPlayer ? 'x' : 'o')

		if (checkWinner()) {
			gameOver = true
			message.textContent = `Winner: ${currentPlayer ? 'Cross' : 'Zero'}`
		} else if (checkDraw()) {
			gameOver = true
			message.textContent = 'Draw'
		} else {
			message.textContent = `Move: ${currentPlayer ? 'Zero' : 'Cross'}`
			currentPlayer = !currentPlayer
		}
	}
}

function checkWinner() {
	function isHorizontalLineFilled(row, col1, col2, col3) {
		return (
			getCell(row, col1) !== '' &&
			getCell(row, col2) !== '' &&
			getCell(row, col3) !== ''
		)
	}

	function isVerticalLineFilled(row1, row2, row3, col) {
		return (
			getCell(row1, col) !== '' &&
			getCell(row2, col) !== '' &&
			getCell(row3, col) !== ''
		)
	}

	function isDiagonalFilled(row1, col1, row2, col2, row3, col3) {
		return (
			getCell(row1, col1) !== '' &&
			getCell(row2, col2) !== '' &&
			getCell(row3, col3) !== ''
		)
	}

	// Проверка по горизонтали и вертикали
	for (let i = 0; i < 3; i++) {
		if (
			(isHorizontalLineFilled(i, 0, 1, 2) &&
				getCell(i, 0) === getCell(i, 1) &&
				getCell(i, 1) === getCell(i, 2)) ||
			(isVerticalLineFilled(0, 1, 2, i) &&
				getCell(0, i) === getCell(1, i) &&
				getCell(1, i) === getCell(2, i))
		) {
			return true
		}
	}

	// Проверка по диагоналям
	if (
		(isDiagonalFilled(0, 0, 1, 1, 2, 2) &&
			getCell(0, 0) === getCell(1, 1) &&
			getCell(1, 1) === getCell(2, 2)) ||
		(isDiagonalFilled(0, 2, 1, 1, 2, 0) &&
			getCell(0, 2) === getCell(1, 1) &&
			getCell(1, 1) === getCell(2, 0))
	) {
		return true
	}

	return false
}

function checkDraw() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (getCell(i, j) === '') {
				return false
			}
		}
	}
	return true
}

function getCell(row, col) {
	let cell = document.getElementById(`${row * 3 + col + 1}`)
	return cell ? cell.textContent : null
}

function resetGame() {
	currentPlayer = Math.random() < 0.5
	gameOver = false

	// Очистка ячеек
	let cells = document.querySelectorAll('.grid-item')
	cells.forEach(cell => {
		cell.textContent = ''
		cell.classList.remove('x', 'o')
	})

	// Сброс сообщения
	message.textContent = `Move: ${currentPlayer ? 'Cross' : 'Zero'}`
}
