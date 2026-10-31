/* TITLE */
const quickInfo = document.querySelector(".quick__info");
const welcomeTitle = document.querySelector(".welcome h1");
const bulletPoints = document.querySelectorAll(".info__bulletpoints li");

// Animate quick_info on page load
gsap.from(quickInfo, {
    opacity: 0,
    y: -50,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.5
});

// Animate h1 on page load
const titleSplit = new SplitType(welcomeTitle, {types: 'chars, words'});

gsap.from(titleSplit.words, {
    y: '100%',
    opacity: 0,
    duration: 0.5,
    ease: 'power4.in',
    stagger: 0.1,
    delay: 0.5
});

// Animate bullet points on page load
gsap.from(bulletPoints, {
    opacity: 0,
    x: -50,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.2,
    delay: 0.7
});



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

/* HOME */

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal");

splitTypes.forEach((word, i)=>{
   
    const text = new SplitType(word, {types: 'words, lines'});

    gsap.fromTo(text.words, {

        opacity: 0.2 

    },{
        opacity: 1,
        stagger: 0.05,
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



/* ABOUT */
const about_container = document.querySelector("#about");
const about_box = document.querySelector(".about__intro");
const about_title = document.querySelector(".about__text h3");
const about_text = document.querySelectorAll(".about__description");
const download = document.querySelector(".download__cv");


const tools = document.querySelectorAll(".tool");
const toolbox = document.querySelector(".about__toolbox");

gsap.set(tools, { opacity: 0, transformOrigin: 'center center'});
gsap.set(about_box, {width:0, height:0, opacity:0, transformOrigin: 'center center'});
gsap.set(about_title, {opacity: 0});
gsap.set(about_text, {opacity: 0});
gsap.set(download, {opacity: 0});

let aboutTl = gsap.timeline({defaults: {ease: 'power4.inOut', duration: 0.8}, scrollTrigger: {trigger: about_container, start: 'top 80%', end: 'bottom 20%', toggleActions: 'play play none none'}});

aboutTl.to(about_box, {width: '100%', height: '100%', opacity: 1})
.to(about_title, {opacity: 1, duration: 0.5}, "-=0.5")
.to(about_text, {opacity: 1, duration: 1, stagger: 0.2}, "-=0.3")
.to(download, {opacity: 1, duration: 1,}, "-=0.3")
   


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
            end: 'bottom',
            scrub: false,
            markers: false,
            toggleActions: 'play play none reverse'
        }
    })
});


/* CONTACT */

const contact_title = document.querySelector("#contact .title");
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
})
