// Get the modal
const modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.querySelector(".img01");
let captionText = document.querySelector(".caption");

let getImg = document.querySelectorAll(".blog__img");

getImg.forEach((getImg)=>{
    getImg.onclick=function(){
        modal.classList.remove("disabled");
        modal.classList.add("active");
        modalImg.src=this.src;
        captionText.innerHTML=this.alt;
    } 
});

// Get the <span> element that closes the modal
let close = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
// close image in modal
close.addEventListener("click",()=>{
    if(modal.classList.contains("active")){
        modal.classList.remove("active");
        modal.classList.add("disabled");
    }
});

window.onclick = function(event){
    if(event.target == modal){
        modal.classList.remove("active");
        modal.classList.add("disabled");
    };
};

//SLider - comparison blog post
document.querySelector(".compare #compare-ip").addEventListener("input", (e)=>{
    document.querySelector(".compare .before .after").style.width= (+e.target.value) + "px";
});


///FADE IN
/* function inView(el) {
    const rect = el.getBoundingClientRect();

    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const blog = document.querySelector(".blog__section");
const post = document.querySelectorAll('.post');


document.addEventListener("scroll", () =>{
    post.forEach(el => {
        el.classList.add("active");
    });
}) */
