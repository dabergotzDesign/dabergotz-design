 /*
 const r_title = new rive.Rive({
  src: "./rive/ddesign_title.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "Innovating 5.0",
  stateMachines: "reveal state",
  onLoad: () => {
    r_title.resizeDrawingSurfaceToCanvas();
  },
});
*/

/* PAUSE BG */
const pause = document.querySelector(".pauseBG"),
  pauseIcon = pause.childNodes[0];


pause.addEventListener("click", ()=>{
  const splash_bg = document.querySelector(".ddesign__VM-bg"); 
  splash_bg.classList.toggle("paused");

  if(pauseIcon.classList.contains("fa-pause")){
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");
  }else{
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
  }
});
