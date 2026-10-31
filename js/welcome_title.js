/* Greetings */
const greetingsH2 = document.querySelectorAll(".welcome__text h2");

let i = 0;

function revealGreeting() {
  setTimeout(function () {
    const greeting = greetingsH2[i];
    greeting.classList.add("greeting");

    const greetingSplit = new SplitType(greeting, { types: "chars, words" });

    gsap.from(greetingSplit.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      duration: 0.4,
      ease: "back.out(1.7)"
    });

    setTimeout(function () {
      greetingSplit.revert();
      greeting.classList.remove("greeting");
      i = (i + 1) % greetingsH2.length;
      revealGreeting();
    }, 5000);
  }, 100);
}

if (greetingsH2.length > 0) {
  revealGreeting();
}



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
