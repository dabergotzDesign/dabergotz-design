//toggle gallery Button rotation & game gallery
var gameGalleryBtn = document.querySelector(".gameBtnToggle");
var gallery = document.getElementById("galleryGames");
var gameNav = document.getElementById("gameWrapper");

gameGalleryBtn.onclick = function(toggle) {
    if(!gameGalleryBtn.classList.contains('open')){
        gameGalleryBtn.classList.add('open');
        gameGalleryBtn.classList.remove('closed');

        gallery.style.display = "block";
        gameNav.style.display = "block";

        toggle.preventDefault();
    }
    else
    {
        gameGalleryBtn.classList.remove('open');
        gameGalleryBtn.classList.add('closed');

        gallery.style.display = "none";
        gameNav.style.display = "none"; 

        toggle.preventDefault();
    }
}


//toggle gallery Button rotation & web gallery
var webGalleryBtn = document.querySelector(".webBtnToggle");
var webGallery = document.getElementById("galleryWeb");
var webNav = document.getElementById("webWrapper");

webGalleryBtn.onclick = function(toggle) {
    if(!webGalleryBtn.classList.contains('open')){
        webGalleryBtn.classList.add('open');
        webGalleryBtn.classList.remove('closed');

        webGallery.style.display = "block";
        webNav.style.display = "block";

        toggle.preventDefault();
    }
    else
    {
        webGalleryBtn.classList.remove('open');
        webGalleryBtn.classList.add('closed');

        webGallery.style.display = "none";
        webNav.style.display = "none"; 

        toggle.preventDefault();
    }
}



