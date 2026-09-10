/* /// CASE STUDY PAGES /// */

/* SIDENAV */
(() => {
    const sidenav = document.querySelector('.cs__sidenav');

    if (!sidenav) return;

    const navItems = Array.from(sidenav.querySelectorAll('li'));
    const sections = Array.from(document.querySelectorAll('.cs__content > div[id]'));

    if (!navItems.length || !sections.length || navItems.length !== sections.length) return;

    const setActiveItem = (activeIndex) => {
        navItems.forEach((item, index) => {
            item.classList.toggle('active', index === activeIndex);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
            const activeIndex = sections.indexOf(visibleEntry.target);
            if (activeIndex !== -1) {
                setActiveItem(activeIndex);
            }
        } else {
            setActiveItem(-1);
        }
    }, {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach((section) => observer.observe(section));
})();

/* image expand */
// Get the modal
const modalCS = document.querySelector(".cs__modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalContent = document.querySelector(".modal__img");
let modalCaption = document.querySelector(".modal__caption");

let modalImg = document.querySelectorAll(".imgCS");


modalImg.forEach((modalImg)=>{
    modalImg.onclick=function(){
        modalCS.classList.remove("m_disabled");
        modalCS.classList.add("m_active");
        modalContent.src=this.src;
        modalCaption.innerHTML=this.alt;
    } 
});

// Get the <span> element that closes the modal
let csClose = document.querySelector(".img__close");

// When the user clicks on <span> (x), close the modal
// close image in modalBlog
csClose.addEventListener("click",()=>{
    if(modalCS.classList.contains("m_active")){
        modalCS.classList.remove("m_active");
        modalCS.classList.add("m_disabled");
    }
});


window.addEventListener("keydown", e =>{

    if(e.key === "Escape" && modalCS.classList.contains("m_active")){
        modalCS.classList.remove("m_active")
        modalCS.classList.add("m_disabled")
    }

})

window.onclick = function(event){
    if(event.target == modalCS){
        modalCS.classList.remove("m_active");
        modalCS.classList.add("m_disabled");
    };
};

const sideNav = document.querySelector(".cs__sidenav"),
menuButtonHide = document.querySelector(".button__hide"),
menuButtonShow = document.querySelector(".button__show");

menuButtonShow.addEventListener("click", ()=>{
    menuButtonHide.classList.remove("hidden");
    menuButtonShow.classList.add("hidden");

    sideNav.classList.remove("hidden");
    sideNav.classList.add("open");
});

menuButtonHide.addEventListener("click", ()=>{
    menuButtonShow.classList.remove("hidden");
    menuButtonHide.classList.add("hidden");

    sideNav.classList.remove("open");
    sideNav.classList.add("hidden");
});


/* toggle play */
/* const playVideo = document.querySelectorAll(".article__container figure video");
const btnPlay = document.querySelector(".article__container figure i");


playVideo.forEach(vid => {

    
    function togglePlay(){
        if(vid.paused || vid.ended){
            vid.play();
        }else{
            vid.pause();
            vid.currentTime = 0;
        }
    }
    
    vid.addEventListener("click", togglePlay);
}); */

const playVideos = document.querySelectorAll(".article__container figure video");

playVideos.forEach((video) => {
    const figure = video.closest("figure");
    const getPlayButton = () => figure.querySelector("i, svg");

    video.onmouseover = null;
    video.onmouseout = null;

    const syncPlayButton = () => {
        const playButton = getPlayButton();

        if (playButton) {
            playButton.classList.toggle("playing", !video.paused && !video.ended);
        }
    };

    const togglePlay = (event) => {
        if (!event.target.closest("video, i, svg")) return;

        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    };

    figure.addEventListener("click", togglePlay);
    video.addEventListener("play", syncPlayButton);
    video.addEventListener("pause", syncPlayButton);
    video.addEventListener("ended", syncPlayButton);
    syncPlayButton();
});




/* playVideo.addEventListener("play", ()=>{
    btnPlay.classList.add("play");
});
playVideo.addEventListener("paused", ()=>{
    btnPlay.classList.remove("play");
}); */


