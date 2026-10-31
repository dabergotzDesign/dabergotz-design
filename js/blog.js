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


window.addEventListener("keydown", e =>{

    if(e.key === "Escape" && modalBlog.classList.contains("active")){
        modalBlog.classList.remove("active")
        modalBlog.classList.add("disabled")
    }

})

window.onclick = function(event){
    if(event.target == modalBlog){
        modalBlog.classList.remove("active");
        modalBlog.classList.add("disabled");
    };
};

//SLider - comparison blog post
/* document.querySelector(".compare #compare-ip").addEventListener("input", (e)=>{
    document.querySelector(".compare .before .after").style.width= (+e.target.value) + "px";
}); */


/* Pagination */

const pageNumbers = document.querySelector("#page__numbers"),
    pageList = document.querySelector("#page__list"),
    listItems = pageList.querySelectorAll(".post"),
    nextBtn = document.querySelector(".page__next"),
    prevBtn = document.querySelector(".page__previous");

const pageLimit = 10;
const pageCount = Math.ceil(listItems.length / pageLimit);
let currentPage = 1;



const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  };

const handlePageButtonsStatus = () =>{
    if(currentPage === 1){
        disableButton(prevBtn);
    }else{
        enableButton(prevBtn)
    }

    if(pageCount === currentPage){
        disableButton(nextBtn);
    }else{
        enableButton(nextBtn)
    }
}

const handleActivePage = () =>{
    document.querySelectorAll(".page__number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if(pageIndex == currentPage){
            button.classList.add("active");
        }
    })
}

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "page__number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "page" + index);

    pageNumbers.appendChild(pageNumber);
}

const getPageNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i)        
    }
}

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePage();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * pageLimit;
    const currRange = pageNum * pageLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if(index >= prevRange && index < currRange){
            item.classList.remove("hidden");
        }
    })
}

window.addEventListener("load", () => {
    getPageNumbers();
    setCurrentPage(1);

    prevBtn.addEventListener("click", ()=>{
        setCurrentPage(currentPage - 1);
    })

    nextBtn.addEventListener("click", () => {
        setCurrentPage(currentPage + 1)
    })

    document.querySelectorAll(".page__number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if(pageIndex){
            button.addEventListener("click", ()=>{
                setCurrentPage(pageIndex);
            })
        }
    })
})