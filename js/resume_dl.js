const dl_btn = document.querySelector(".download__cv");
const fileLink = "https://drive.google.com/uc?export=download&id=1HBCR7tp9m3J8y1CeV6WCzDnGsNMHYjzQ";

const initTimer = ()=>{
    location.href = fileLink;
}

dl_btn.addEventListener("click", initTimer);
