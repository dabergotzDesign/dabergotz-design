//import gsap from 'gsap';


/* HOME - title & background */
const bg = document.querySelector(".bg-home"),
    mainTitle = document.querySelector(".headline"),
    subTitle = document.querySelector("#subheadline"),
    accordion = document.querySelector(".accordion__card .panel")

let mm = gsap.matchMedia()

let split = new SplitType(mainTitle)

const homeTL = gsap.timeline({
    defaults: {
        ease: 'power4.inOut'
    }
});

gsap.set(bg, {width: 0})

mm.add({
    isMobile: '(max-width: 320px)',
    isTablet: '(max-width: 768px)',
    isDesktop: '(min-width: 1024px)'
}, (context)=>{
    
    let {isMobile, isTablet, isDesktop} = context.conditions;

    if(isDesktop){


        homeTL
            .to(bg, {
                width: '100%',
                ease: 'power4.in',
                duration: 1.8
            })
            .from('.word', {
                yPercent: 100,
                duration: 1,
                stagger: 0.1
            }, "-=.5")
            .from(subTitle, {
                yPercent: -100,
                duration: 1
            }, "<")
           
    }  
    
    
    if(isTablet){


        homeTL
            .to(bg, {
                width: '100%',
                ease: 'power1.in',
                duration: 1
            })
            .from('.word', {
                yPercent: 180,
                duration: 1,
                stagger: 0.1
            }, "-=.5")
            .from(subTitle, {
                yPercent: -100,
                duration: 1
            }, "<")

    } 

    if(isMobile){

        homeTL
            .to(bg, {
                width: '100%',
                ease: 'power1.in',
                duration: 0.5
            })
            .from(mainTitle, {
                yPercent: 200,
                duration: 1
            })
            .from(subTitle, {
                yPercent: -100,
                duration: 1
            }, "<")

    }



})
