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
            toggleActions: 'play play reverse none'
        }
    })
})


/* PORTFOLIO */

const portfolio_title = document.querySelector("#portfolio .title");
const card = document.querySelectorAll("#portfolio .accordion__card-wrapper");


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
    
}, "<=.5")



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
