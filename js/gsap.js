/* TITLE */
const title = document.querySelector(".welcome h1");
const subtitle = document.querySelector(".welcome h2");

const titleSplit = new SplitType(title, {types: 'chars, words'});

gsap.from(titleSplit.chars, {
    x: '-100%',
    opacity: 0,
    duration: 0.1,
    ease: 'elastic.in(0.5, 1)',
    stagger: 0.1
});

const subtitleSplit = new SplitType(subtitle, {types: 'chars, words'});

gsap.from(subtitleSplit.words, {
    opacity: 0,
    duration: 0.5,
    ease: 'power1.in',
    stagger: 0.05,
});

/* HOME */

gsap.registerPlugin(ScrollTrigger);

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
            toggleActions: 'play play none none'
        }
    })
})


/* PORTFOLIO */

const portfolio_title = document.querySelector("#portfolio .title");
const card = document.querySelectorAll("#portfolio .accordion__card-wrapper");
const hL = document.querySelector(".p_canvas-4");

const hL_thumb = document.querySelector(".p_canvas-4 .thumbnail"),
    hL_logo = document.querySelector(".p_canvas-4 .hololist__logo");

const fetti = document.querySelector(".confetti"),
        fettiCannon = document.querySelector(".confetti__cannon"),
        fettiPaper = document.querySelectorAll(".confetti__paper");

// Confetti Animation on Hover

gsap.set(fettiCannon, {opacity: 0, transformOrigin: 'bottom center'});
gsap.set(fettiPaper, {scale:0, xPercent:-40, yPercent: -45, transformOrigin: 'center center'});

let tl = gsap.timeline({ paused: true, reversed: true});

tl.to(fettiCannon, {
    opacity: 1,
    rotation: -20,
    duration: 0.3,
    ease: 'power4.out',
  })
.to(hL_thumb, {
    scale: 2,
    duration: 0.5,

},"-=0.5")
.to(hL_logo, {
    scale: 1.5,
    duration: 0.5,
},"-=0.5")
.to(fettiPaper, {
    scale: 1,
    xPercent: -20,
    yPercent: -60,
    duration: 0.3,
    ease: 'power4.out',
}, "+=0.01")
.to(fettiCannon, {
    opacity: 0,
    yPercent: -20,
    rotation: 20,
    duration: 0.3,
    ease: 'power4.out',
}, "+=0.1")
.to(fettiPaper, {
    yPercent: -20,
    opacity: 0,
    duration: 1,
    ease: 'power1.out',
},"-=0.5");



hL.addEventListener("mouseenter", ()=>{
    tl.reversed() ? tl.play() : tl.reverse();
});


hL.addEventListener("mouseleave", ()=>{
    tl.reversed() ? tl.play() : tl.reverse();
});


gsap.from(portfolio_title, {
    duration:0.5,
    yPercent: 80,
    opacity: 0,
    ease: 'none',
    delay: 0.5,
    scrollTrigger: {
        trigger: "#portfolio",
        toggleActions: 'play play none reverse'
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
    
}, "-=.5")


/* ABOUT */
const tools = document.querySelectorAll(".tool");
const toolbox = document.querySelector(".about__toolbox");

gsap.set(tools, { opacity: 0, transformOrigin: 'center center'});

gsap.to(tools, {
    opacity: 1,
    duration: 0.5,
    ease: 'elastic.in(0.3, 1)',
    stagger: 0.2,
    scrollTrigger: {
        trigger: toolbox,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
        toggleActions: 'play play none reverse'
    }

});


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
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: false,
            markers: false,
            toggleActions: 'play play none reverse'
        }
    })
});


/* CONTACT */

const contact_title = document.querySelector("#contact .subtitle");
const contacts = document.querySelector(".contacts__wrapper");
const social = document.querySelector(".contacts__socials");
const socials = document.querySelectorAll(".contacts__socials li");

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
});

let mm = gsap.matchMedia();

mm.add("(min-width: 1440px)", ()=>{

gsap.set(socials, {xPercent: 200, opacity: 0});

gsap.to(socials, {
    xPercent: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: social,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
        toggleActions: 'play play none reverse'
    }
})

});