const dl_btn = document.querySelector(".download__cv");
const fileLink = "https://drive.google.com/uc?export=download&id=1b_yRt-cPmWwZ9x08QnaCee_sbVQG2Sjl";

const initTimer = ()=>{
    location.href = fileLink;
}

dl_btn.addEventListener("click", initTimer);
