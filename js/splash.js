const splash = document.querySelector(".splash");


//delay links in nav
function delay(url){

    loadSplash();

    setTimeout(() => {
        window.location = url
    }, 500);
}


function splashScreen(){
    splash.classList.add("slideOut");
}

function loadSplash(){
    splash.classList.add("loadSplash");
}

setTimeout(() => {
    splashScreen()
}, 500);



