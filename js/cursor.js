const cursor = document.querySelector('.custom_cursor');
const hover = document.querySelectorAll(".hover");


document.addEventListener('mousemove', e =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

})

window.addEventListener("mousedown", ()=>{
    cursor.style.backgroundColor = "#FF006D";
})

window.addEventListener("mouseup", ()=>{
    cursor.style.backgroundColor = "#0d0d0d50";
})



hover.forEach(e => {
    e.addEventListener("mouseenter", ()=>{
        cursor.classList.add("state_hover");
        
        if(e.classList.contains("hover_pause")){
            cursor.innerHTML = "<i class='fa-solid fa-pause'></i>";
        }

        if(e.classList.contains("hover_nav")){
            cursor.innerHTML = "<i class='fa-solid fa-arrow-up-right-from-square'></i>";
        }

        if(e.classList.contains("hover_close")){
            cursor.innerHTML = "<i class='fa-solid fa-close'> close</i>";
        }

        if(e.classList.contains("hover_back")){
            cursor.innerHTML = "<i class='fa-solid fa-arrow-left'> back</i>";
        }

        if(e.classList.contains("hover_portfolio")){
            cursor.innerHTML = "<i class='fa-solid fa-arrow-up-right-from-square'> explore</i>";
            e.classList.add("play");

            if(e.classList.contains("play")){

                //Portfolio assets
                const portfolioCards = document.querySelectorAll(".portfolio__card");
                const portfolioVideo = portfolioCards[0].querySelector("video");

                portfolioCards.forEach(card => {
                    card.addEventListener("mouseenter", ()=>{
                        const video = card.querySelector("video");
                        video.play();
                    })});

            }
        }

        if(e.classList.contains("hover_dl")){
            cursor.innerHTML = "<i class='fa-solid fa-download'></i>";
        }

        if(e.classList.contains("hover_input")){
            cursor.innerHTML = "<i class='fa-solid fa-pen'></i>";
        }

        if(e.classList.contains("hover_submit") && !e.disabled){
            cursor.innerHTML = "<i class='fa-solid fa-arrow-right'></i>";
        }else if(e.classList.contains("hover_submit") && e.disabled){
            cursor.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        }
        
    })

    });

hover.forEach(e => {
    e.addEventListener("mouseleave", ()=>{
        cursor.classList.remove("state_hover");
        if(e.classList.contains("hover_portfolio")){
            e.classList.remove("play");
        }
    })
});