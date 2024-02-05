
let acc = document.getElementsByClassName("accordion__card");
let panel = document.getElementsByClassName("panel");

for (let i = 0; i < acc.length; i++) {
   
    acc[i].addEventListener("click", () =>{
        acc[i].classList.toggle('active');
        panel[i].classList.toggle('active');
    });

}