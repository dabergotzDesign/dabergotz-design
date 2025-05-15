
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




/* ABOUT */
/*
const about_title = document.querySelector("#about .title");
const about_intro = document.querySelector(".about__intro");
const about_career = document.querySelector(".about__career");
let mm = gsap.matchMedia();

const tl = gsap.timeline({
    duration: 1,
    ease: 'power4.in',
    height: 0,
    opacity: 0,
    delay: 0.5,
    scrollTrigger:{
        trigger: '#about'
    }
})

gsap.set(about_intro, {height: 0, opacity: 0});
gsap.set(about_career, {height: 0, opacity: 0});



gsap.from(about_title, {
    duration: 0.5,
    yPercent: 5,
    opacity: 0,
    delay: 0.3,
    ease: 'none',
    scrollTrigger: {
        trigger: '#about'
    }
});

tl.to( about_intro, {height: '100%', opacity: 1})
tl.to( about_career, {height: '125%', opacity: 1})

mm.add({isMobile: '(max-width: 425px)',
        isTablet: '(max-width: 768px)'
}, (context)=>{
    let {isMobile, isTablet} = context.conditions;

    if(isMobile){
        tl.to(about_career, {height: '180%', opacity: 1})
        tl.to( about_intro, {height: '105%', opacity: 1})
    }
    if(isTablet){
        tl.to(about_career, {height: '180%', opacity: 1})
        tl.to( about_intro, {height: '100%', opacity: 1})
    }
})
*/



/* BLOG */

const blog = document.querySelector("#blog");

gsap.set(blog, {gap: '100em', opacity: 0})

gsap.to(blog, {
    duration: 1,
    ease: 'elastic.in(i, 0.3)',
    gap: '2em',
    opacity: 1,
    scrollTrigger: {trigger: '#blog'}
})



/* CONTACT */

const contact_title = document.querySelector("#contact .title");
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
})
