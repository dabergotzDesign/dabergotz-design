/* // fade-in
const cards = document.querySelectorAll(".fade-in");

const scrollElement = document.querySelector(".article__container");

 
function visibleInView(el){
    let rect = el.getBoundingClientRect();

    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showElement(){
    for (let i = 0; i < cards.length; i++) {
        
        if(visibleInView(cards[i])){

            setTimeout(()=>{
                cards[i].classList.add('active');
            }, 500)

        }
        else{
            cards[i].classList.remove('active');
        }
        
    }
}



//events
window.addEventListener("load", showElement);
scrollElement.addEventListener("scroll", showElement);
 */

//SLIDESHOW
let slideIndex = 0;
activeSlide();

function activeSlide() {
    let slides = document.querySelectorAll(".slide");
    let dot_slide = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        
        //add "active" class if current slide has not contain it
        slides[i].classList.add("out");        
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for (let j = 0; j < dot_slide.length; j++) {
        dot_slide[j].className = dot_slide[j].className.replace(" active-d", "");
    }


    slides[slideIndex-1].classList.remove("out");
    slides[slideIndex-1].classList.add("active");
    dot_slide[slideIndex-1].className += " active-d";

    setTimeout(activeSlide, 8000);
}