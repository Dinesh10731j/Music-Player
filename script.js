
const myAudios = document.querySelector("#audio");
const progressBar = document.querySelector("#progress");
const ctrIcon = document.querySelector("#ctrIcon");

myAudios.addEventListener('loadedmetadata', function() {
    progressBar.max = myAudios.duration;
    progressBar.value = myAudios.currentTime;
});

myAudios.addEventListener('timeupdate', function() {
    progressBar.value = myAudios.currentTime;
});

const playPause = () => {
    if (myAudios.paused) {
        myAudios.play();
        ctrIcon.classList.add("fa-pause");
        ctrIcon.classList.remove("fa-play");
    } else {
        myAudios.pause();
        ctrIcon.classList.add("fa-play");
        ctrIcon.classList.remove("fa-pause");
    }
};

progressBar.addEventListener("input", () => {
    myAudios.currentTime = progressBar.value;
});

myAudios.addEventListener('ended', function() {
   
    ctrIcon.classList.add("fa-play");
    ctrIcon.classList.remove("fa-pause");
});
