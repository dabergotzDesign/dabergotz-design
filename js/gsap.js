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
    duration: 0.5,
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

/* HOME */

const splitTypes = document.querySelectorAll(".reveal");

splitTypes.forEach((word, i)=>{
   
    const text = new SplitType(word, {types: 'words'});

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
            toggleActions: 'play play reverse none'
        }
    })
})


/* PORTFOLIO */

/* Mobile gallery */

const contentGalleries = document.querySelectorAll(".content__gallery");
const mobileGalleryQuery = window.matchMedia("(max-width: 450px)");

contentGalleries.forEach((gallery) => {
    const images = Array.from(gallery.querySelectorAll("img"));

    if (images.length < 2) {
        return;
    }

    let activeIndex = 0;
    let pointerStart = null;
    const controls = document.createElement("div");
    const previousButton = document.createElement("button");
    const nextButton = document.createElement("button");

    controls.className = "gallery__controls";
    controls.setAttribute("aria-label", "Gallery controls");

    previousButton.type = "button";
    previousButton.className = "gallery__control gallery__control--previous";
    previousButton.setAttribute("aria-label", "Show previous image");
    previousButton.textContent = "←";

    nextButton.type = "button";
    nextButton.className = "gallery__control gallery__control--next";
    nextButton.setAttribute("aria-label", "Show next image");
    nextButton.textContent = "→";

    controls.append(previousButton, nextButton);
    gallery.insertAdjacentElement("afterend", controls);

    const setGalleryMode = () => {
        gsap.killTweensOf(images);

        if (mobileGalleryQuery.matches) {
            gallery.classList.add("is-slider");
            images.forEach((image, index) => {
                image.classList.toggle("is-active", index === activeIndex);
                image.setAttribute("aria-hidden", String(index !== activeIndex));
            });
            gsap.set(images, { xPercent: 0, opacity: 0 });
            gsap.set(images[activeIndex], { opacity: 1 });
            return;
        }

        gallery.classList.remove("is-slider");
        images.forEach((image) => {
            image.classList.remove("is-active");
            image.removeAttribute("aria-hidden");
        });
        gsap.set(images, { clearProps: "transform,opacity" });
    };

    const showImage = (direction) => {
        const outgoing = images[activeIndex];
        activeIndex = (activeIndex + direction + images.length) % images.length;
        const incoming = images[activeIndex];

        gsap.killTweensOf(images);
        gsap.set(images, { xPercent: 0, opacity: 0 });

        outgoing.classList.remove("is-active");
        outgoing.setAttribute("aria-hidden", "true");
        incoming.classList.add("is-active");
        incoming.setAttribute("aria-hidden", "false");

        gsap.timeline()
            .to(outgoing, {
                xPercent: direction > 0 ? -100 : 100,
                opacity: 0,
                duration: 0.45,
                ease: "power2.inOut"
            }, 0)
            .fromTo(incoming, {
                xPercent: direction > 0 ? 100 : -100,
                opacity: 0
            }, {
                xPercent: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power2.out"
            }, 0);
    };

    previousButton.addEventListener("click", () => showImage(-1));
    nextButton.addEventListener("click", () => showImage(1));

    gallery.addEventListener("pointerdown", (event) => {
        if (mobileGalleryQuery.matches) {
            pointerStart = { x: event.clientX, y: event.clientY };
        }
    });

    gallery.addEventListener("pointerup", (event) => {
        if (!pointerStart || !mobileGalleryQuery.matches) {
            pointerStart = null;
            return;
        }

        const deltaX = event.clientX - pointerStart.x;
        const deltaY = event.clientY - pointerStart.y;
        pointerStart = null;

        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            showImage(deltaX < 0 ? 1 : -1);
        }
    });

    gallery.addEventListener("pointercancel", () => {
        pointerStart = null;
    });

    mobileGalleryQuery.addEventListener("change", setGalleryMode);
    setGalleryMode();
});


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
            //toggleActions: 'play play reverse revers'
        }
    })
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
