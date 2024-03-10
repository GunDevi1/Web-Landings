const cityWeather = document.querySelector('#CityWeather')
const cityName = document.querySelector('.city__name')
const cityTemp = document.querySelector('.city__temp')
const cityIcon = document.querySelector('.city__icon')
const cityWind = document.querySelector('.wind_img')
const cityHumidity = document.querySelector('.humidity_img')
const cityHumidityText = document.querySelector('#humidity_text')
const cityWindText = document.querySelector('#wind_text')
const cityWeatherDescription = document.querySelector(
	'.city__weather-description'
)

async function checkWeather(city) {
	const api_key = 'a6dd55b19b0ffbec94aa9276a0f7a422'
	const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

	const response = await fetch(weather_url)
	let data = await response.json()

	return data
}

const cityInput = document.querySelector('#City')
const cityInfo = document.querySelector('#Info')

cityInput.addEventListener('keypress', async function (event) {
	if (event.key === 'Enter') {
		event.preventDefault()

		const city = cityInput.value.trim()

		// Проверка пустого поля
		if (!city) {
			clearCityInfo()
			cityName.textContent = 'Please enter the city name'
			return
		}

		try {
			const weather_data = await checkWeather(city)

			// Проверка того что информация за погоду была получена
			if (weather_data.cod === 200 && weather_data.name) {
				updateCityInfo(weather_data)
			} else {
				clearCityInfo()
				cityName.textContent = 'City not found'
			}
		} catch (error) {
			clearCityInfo()
			console.error('Error:', error)
		}
		document.querySelector('.check_weather').click()
	}
})

function updateCityInfo(weather_data) {
	cityName.textContent = weather_data.name
	cityTemp.textContent = `${Math.round(weather_data.main.temp - 273.15)} °C`
	cityIcon.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`
	cityWind.classList.remove('hidden')
	cityHumidity.classList.remove('hidden')
	cityWindText.textContent = `${weather_data.wind.speed} m/s`
	cityHumidityText.textContent = `${weather_data.main.humidity}%`
	cityWeatherDescription.textContent = weather_data.weather[0].description
}

function clearCityInfo() {
	cityIcon.src = ''
	cityName.textContent = ''
	cityTemp.textContent = ''
	cityWind.textContent = ''
	cityHumidity.textContent = ''
	cityWind.classList.add('hidden')
	cityHumidity.classList.add('hidden')
	cityWindText.textContent = ''
	cityHumidityText.textContent = ''
	cityWeatherDescription.textContent = ''
}
