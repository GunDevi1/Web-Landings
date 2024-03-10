const input = document.querySelector('.qr__input')
const qrCode = document.querySelector('.qr__qr-code-img')
const sizeSelector = document.querySelector('.qr__select')
const firstColor = document.querySelector('.firstColor')
const secondColor = document.querySelector('.secondColor')

function generateQRCode() {
	let size = sizeSelector.options[sizeSelector.selectedIndex].textContent
	let color = firstColor.value.split('#')[1]
	let bgcolor = secondColor.value.split('#')[1]
	return `https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=${size}&color=${color}&bgcolor=${bgcolor}`
}

input.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		generateQRCode()
	}
})

const generateButton = document.querySelector('.generate')

generateButton.addEventListener('click', function () {
	qrCode.src = generateQRCode()
})

const download = document.querySelector('.download')

download.addEventListener('click', () => {
	if (qrCode.src != window.location.href) {
		const qrCodeUrl = qrCode.src
		downloadQRCode(qrCodeUrl)
	}
})

function downloadQRCode(qrUrl) {
	fetch(qrUrl)
		.then(response => response.blob())
		.then(blob => {
			const url = window.URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.style.display = 'none'
			a.href = url
			a.download = 'qrcode.png'
			document.body.appendChild(a)
			a.click()
			window.URL.revokeObjectURL(url)
		})
		.catch(error => console.error('Error downloading QR code:', error))
}
