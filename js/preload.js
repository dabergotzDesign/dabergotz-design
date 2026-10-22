const loader = document.querySelector(".preloader");

window.addEventListener("load", ()=>{

    setTimeout(() => {    

        loader.classList.add('fadeout');
        setTimeout(()=>{
            loader.style.display = 'none';
        }, 1000);

    }, 3000);



});