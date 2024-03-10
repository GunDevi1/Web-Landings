const image = document.getElementById('cover'),
	title = document.getElementById('title'),
	artist = document.getElementById('artist'),
	currentTimeEl = document.getElementById('current-time'),
	durationEl = document.getElementById('duration'),
	progress = document.getElementById('progress'),
	prevBtn = document.getElementById('prev'),
	playBtn = document.getElementById('play'),
	nextBtn = document.getElementById('next'),
	background = document.getElementById('bg-img'),
	playerProgress = document.getElementById('player-progress')

const music = new Audio()

const songs = [
	{
		path: '../music/1.mp3',
		displayName: 'Rules of Nature',
		cover: '../images/1.jpg',
		artist: 'Jamie Christopherson',
	},
	{
		path: '../music/2.mp3',
		displayName: 'The Only Thing I Know For Real',
		cover: '../images/2.jpg',
		artist: 'Jamie Christopherson',
	},
	{
		path: '../music/3.mp3',
		displayName: 'It Has To Be This Way',
		cover: '../images/3.jpg',
		artist: 'Jamie Christopherson',
	},
	{
		path: '../music/4.mp3',
		displayName: 'Bury The Light',
		cover: '../images/4.jpg',
		artist: 'Casey Edwards',
	},
	{
		path: '../music/5.mp3',
		displayName: 'The Stains Of Time',
		cover: '../images/5.jpg',
		artist: 'Jamie Christopherson',
	},
]

let musicIndex = 0
let isPlaying = false

function togglePlay() {
	isPlaying ? pauseMusic() : playMusic()
}

function playMusic() {
	isPlaying = true

	playBtn.classList.replace('fa-play', 'fa-pause')
	playBtn.setAttribute('title', 'Pause')
	music.play()
}

function pauseMusic() {
	isPlaying = false

	playBtn.classList.replace('fa-pause', 'fa-play')
	playBtn.setAttribute('title', 'Play')
	music.pause()
}

function loadMusic(song) {
	music.src = song.path
	title.textContent = song.displayName
	artist.textContent = song.artist
	image.src = song.cover
	background.src = song.cover
}

function changeMusic(direction) {
	musicIndex = (musicIndex + direction + songs.length) % songs.length
	loadMusic(songs[musicIndex])
	playMusic()
}

function updateProgressBar() {
	const { duration, currentTime } = music
	const progressPercent = (currentTime / duration) * 100
	progress.style.width = `${progressPercent}%`

	const formatTime = time => String(Math.floor(time)).padStart(2, '0')

	currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
		currentTime % 60
	)}`
}

function updateDuration() {
	const { duration } = music

	const formatTime = time => String(Math.floor(time)).padStart(2, '0')

	durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
		duration % 60
	)}`
}

function setProgressBar(e) {
	const width = playerProgress.clientWidth
	const clickX = e.offsetX
	music.currentTime = (clickX / width) * music.duration
}

playBtn.addEventListener('click', togglePlay)
prevBtn.addEventListener('click', () => changeMusic(-1))
nextBtn.addEventListener('click', () => changeMusic(1))
music.addEventListener('ended', () => changeMusic(1))
music.addEventListener('timeupdate', updateProgressBar)
music.addEventListener('loadedmetadata', updateDuration)
playerProgress.addEventListener('click', setProgressBar)

loadMusic(songs[musicIndex])
