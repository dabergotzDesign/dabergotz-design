// fade-in
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
