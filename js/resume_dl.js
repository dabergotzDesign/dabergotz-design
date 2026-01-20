const dl_btn = document.querySelector(".download__cv");
const fileLink = "https://drive.google.com/uc?export=download&id=1lGR_TG1oaIlzCtLU4IQu34k0c9kW9TuQ";

const initTimer = ()=>{
    location.href = fileLink;
}

dl_btn.addEventListener("click", initTimer);
