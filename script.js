const myAudios = document.querySelector("#audio");
const progressBar = document.querySelector("#progress");
const ctrIcon = document.querySelector("#ctrIcon");


myAudios.addEventListener('click', function(e) {
    progressBar.max = e.target.duration;
    progressBar.value = e.target.currentTime;

  
  });


  const playPause = () => {

    if (ctrIcon.classList.contains("fa-pause",'fa-play')) {
      myAudios.pause();
      ctrIcon.classList.add("fa-play");
      ctrIcon.classList.remove("fa-pause");
    } else {
      myAudios.play();
      ctrIcon.classList.add("fa-pause");
      ctrIcon.classList.remove("fa-play");
    }
  };


  if(myAudios.play()){
    setInterval(()=>{
progressBar.value = myAudios.currentTime;
    },500)
  }
  

  progressBar.addEventListener("change",()=>{
    myAudios.play();
    myAudios.currentTime = progressBar.value;
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play");
  })