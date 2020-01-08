// Get the modal
const modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.querySelector(".img01");
let captionText = document.querySelector(".caption");

let getImg = document.querySelectorAll(".blogIMG");

getImg.forEach((getImg)=>{
    getImg.onclick=function(){
        modal.classList.remove("modal_disabled");
        modal.classList.add("modal_active");
        modalImg.src=this.src;
        captionText.innerHTML=this.alt;
    } 
});

// Get the <span> element that closes the modal
let close = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
// close image in modal
close.addEventListener("click",()=>{
    if(modal.classList.contains("modal_active")){
        modal.classList.remove("modal_active");
        modal.classList.add("modal_disabled");
    }
});


