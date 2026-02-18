const dl_btn = document.querySelector(".download__cv");
const fileLink = "https://drive.google.com/uc?export=download&id=1j_IQ_9DovjUGvL_zE70VIbm7XdhsuH8_";

const initTimer = ()=>{
    location.href = fileLink;
}

dl_btn.addEventListener("click", initTimer);
