<<<<<<< Updated upstream
=======
/* TITLE */
const quickInfo = document.querySelector(".quick__info");
const welcomeTitle = document.querySelector(".welcome h1");
//const bulletPoints = document.querySelectorAll(".info__bulletpoints li");

gsap.registerPlugin(ScrollTrigger);

// Animate quick_info on page load
gsap.from(quickInfo, {
    opacity: 0,
    y: -50,
    duration: 0.5,
    ease: 'power2.out',
    delay: 0.5
});

// Animate h1 on page load
const titleSplit = new SplitType(welcomeTitle, {types: 'chars, words'});

gsap.from(titleSplit.words, {
    delay: 3.5,
    y: '100%',
    opacity: 0,
    duration: 1,
    ease: 'power4.in',
    stagger: 0.1,
});


/* NAVIGATION */
const nav = document.querySelector(".menu__nav-icons");
const navItems = nav.querySelectorAll("li");

gsap.set(nav, {opacity: 0, xPercent: 100});
gsap.set(navItems, {opacity: 0});

const navTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".splash",
        start: "1% top",
        toggleActions: "play none none reverse"
    }
});

navTimeline.to(nav, {
    opacity: 1,
    xPercent: 0,
    duration: 0.1,
    ease: "power4.out"
}).to(navItems, {
    opacity: 1,
    duration: 0.1,
    stagger: 0.1,
    delay: 0.005
});

>>>>>>> Stashed changes
/* HOME */

const splitTypes = document.querySelectorAll(".reveal");

splitTypes.forEach((word, i)=>{
   
    const text = new SplitType(word, {types: 'words'});

    gsap.fromTo(text.words, {

        opacity: 0.2 

    },{
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: false,
            markers: false,
            toggleActions: 'play play reverse none'
        }
    })
})


/* PORTFOLIO */

/* const portfolio_title = document.querySelector("#portfolio .title");
const card = document.querySelectorAll("#portfolio .accordion__card-wrapper");
<<<<<<< Updated upstream
=======
const hL = document.querySelector(".p_canvas-4");

const hL_thumb = document.querySelector(".p_canvas-4 .thumbnail"),
    hL_logo = document.querySelector(".p_canvas-4 .hololist__logo");

const fetti = document.querySelector(".confetti"),
        fettiCannon = document.querySelector(".confetti__cannon"),
        fettiPaper = document.querySelectorAll(".confetti__paper");
>>>>>>> Stashed changes


gsap.from(portfolio_title, {
    duration:0.5,
    yPercent: 80,
    opacity: 0,
    ease: 'none',
    delay: 0.5,
    scrollTrigger: {
        trigger: "#portfolio"
    }
})

gsap.from(card, {
    duration: 1,
    yPercent: 100,
    ease: 'power4.in',
    delay: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#portfolio'
    }
    
<<<<<<< Updated upstream
}, "<=.5")


=======
}, "-=.5") */


/* ABOUT */
const galleryImgs = document.querySelectorAll(".gallery .image__wrap");
const aboutGallery = document.querySelector(".gallery");

gsap.from(galleryImgs, {
    x: () => (Math.random() < 0.5 ? -1 : 1) * window.innerWidth,
    y: () => gsap.utils.random(-window.innerHeight, window.innerHeight),
    rotation: () => gsap.utils.random(-25, 25),
    duration: 2.5,
    ease: "bounce.out",
    stagger: 0.15,
    clearProps: "transform",
    scrollTrigger: {
        trigger: aboutGallery,
        start: "top 80%",
        once: true
    }
});

>>>>>>> Stashed changes


/* BLOG */

const splitTitle = document.querySelectorAll(".letters");

splitTitle.forEach((char, i)=>{
   
    const text = new SplitType(char, {types: 'chars'});

    gsap.fromTo(text.chars, {

        y: '-100%',
        opacity: 0

    },{
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: char,
            start: 'top',
            end: 'bottom',
            scrub: false,
            markers: false,
            //toggleActions: 'play play reverse revers'
        }
    })
})


/* CONTACT */

/* const contact_title = document.querySelector("#contact .title");
const contacts = document.querySelector(".contacts__wrapper");

gsap.set(contact_title, {xPercent: '-100'});
gsap.set(contacts, {width: 0, opacity: 0});

gsap.to(contact_title, {
    duration: 0.8,
    ease: 'bounce.in',
    xPercent: '0',
    scrollTrigger:{
        trigger: '#contact'
    }
})

gsap.to(contacts, {
    duration: 0.5,
    ease: 'power4.in',
    width: '100%',
    transformOrigin: 'center center',
    opacity: 1,
    scrollTrigger: {trigger: '#contact'}
}) */
