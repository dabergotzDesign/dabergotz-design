// Get the modal
const modalBlog = document.querySelector(".modal__blog");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.querySelector(".img01");
let captionText = document.querySelector(".caption");

let getImg = document.querySelectorAll(".blog__img");

getImg.forEach((getImg)=>{
    getImg.onclick=function(){
        modalBlog.classList.remove("disabled");
        modalBlog.classList.add("active");
        modalImg.src=this.src;
        captionText.innerHTML=this.alt;
    } 
});

// Get the <span> element that closes the modal
let close = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
// close image in modalBlog
close.addEventListener("click",()=>{
    if(modalBlog.classList.contains("active")){
        modalBlog.classList.remove("active");
        modalBlog.classList.add("disabled");
    }
});

window.onclick = function(event){
    if(event.target == modalBlog){
        modalBlog.classList.remove("active");
        modalBlog.classList.add("disabled");
    };
};

//SLider - comparison blog post
document.querySelector(".compare #compare-ip").addEventListener("input", (e)=>{
    document.querySelector(".compare .before .after").style.width= (+e.target.value) + "px";
});

//scroll to top

const scrollUpBtn = document.querySelector(".scroll__top"),
        blog = document.querySelector(".page__blog");

scrollUpBtn.addEventListener("click", () =>{

   blog.scrollTo({
    top: 0,
    behavior: 'smooth'
   })

});

