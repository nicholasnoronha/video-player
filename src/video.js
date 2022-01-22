const videoPlayer = document.querySelector(".video-player")
const video = videoPlayer.querySelector(".video")
const playButton = videoPlayer.querySelector(".play-button")
const volume = videoPlayer.querySelector(".volume")
const currentTimeElement = videoPlayer.querySelector(".current")
const durationTimeElement = videoPlayer.querySelector(".duration")
const progress = videoPlayer.querySelector('.progress-bar')
const progressBar = videoPlayer.querySelector('.progress')
const muteButton = videoPlayer.querySelector(".mute")
const fullscreenButton = videoPlayer.querySelector(".fullscreen")

const hoverableVolume = videoPlayer.querySelector(".hoverable-volume")
let lastVolume



// play and pause button
playButton.addEventListener("click", (e) =>{
    if(video.paused) {
        console.log("play")
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
}) //done

// current time and duration of the vídeo
const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60 )
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    console.log(currentTimeElement.innerHTML)
    console.log(durationTimeElement.innerHTML)
    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`
    cnosole.log(durationMinutes, durationSeconds)
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

//mute button
muteButton.addEventListener("click", () => {
    //volumeMute() //from coffi stuff
    video.muted = !video.muted; // from videoPlayer
    muteButton.classList.toggle("muted")
}) //done 

// hoverableVolume.addEventListener("mouseover", () => {
//     volume.classList.toggle("hide")
// })

hoverableVolume.addEventListener("mouseout", () => {
    volume.classList.toggle("hide")
})


fullscreenButton.addEventListener("click", () => {
    video.requestFullscreen();
})

// const volumeMute = function() {
//     let lastVolume
//     let tempVolume;
//     lastVolume = video.volume
//     console.log("last volume: " + lastVolume)
//     video.volume > 0 ? tempVolume = 0 : tempVolume = lastVolume;
//     video.volume = tempVolume;
//     return volume.value = tempVolume
// };