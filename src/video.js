const videoPlayer = document.querySelector(".video-player")
const video = videoPlayer.querySelector(".video")
const playButton = videoPlayer.querySelector(".play-button")
const volume = videoPlayer.querySelector(".volume")
const currentTimeElement = videoPlayer.querySelector(".current")
const durationTimeElement = videoPlayer.querySelector(".duration")
const progress = videoPlayer.querySelector('.progressBar')
const progressBar = videoPlayer.querySelector('.progress')
const muteButton = videoPlayer.querySelector(".mute")
const muteButton2 = videoPlayer.querySelector(".hoverableVolume")
const fullscreenButton = videoPlayer.querySelector(".fullscreen")

// play and pause button
playButton.addEventListener("click", (e) =>{
    if(video.paused) {
        video.play()
        e.target.textContent = "| |"
    } else {
        video.pause()
        e.target.textContent = "►"
    }
})

//volume
volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value
})

// current time and duration of the vídeo
const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60 )
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : duration}`
}

video.addEventListener("timeupdate", currentTime)

// progress bar
video.addEventListener("timeupdate", () => {
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
})

progress.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})

muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    muteButton.classList.toggle("muted")
})

muteButton2.addEventListener("mouseenter", () => {

}) //
muteButton2.addEventListener("mouseenter", () => {
    
}) //

fullscreenButton.addEventListener("click", () => {
    video.requestFullscreen();
})