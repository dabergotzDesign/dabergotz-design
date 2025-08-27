/* MAIL MODAL */
/* const mailM = document.querySelector(".mailModal");
const open = document.querySelector(".envelope_button");
const close = document.querySelector(".closeMail");

open.onclick = function(){
    mailM.style.display = "block";
}

close.onclick = function(){
    mailM.classList.add("out");
    
    setTimeout(() => {
        mailM.classList.remove("out");
    }, 300);
    
    mailM.style.display = "none";
}

window.onclick = function(e){
    if(e.target == mailM){
        mailM.classList.add("out");
        
        setTimeout(() => {
            mailM.classList.remove("out");
        }, 300);
        
        mailM.style.display = "none";
    }
} */


/* MESSENGER VALIDATION */
let msgName = document.querySelector("#name");
let msgEmail = document.querySelector("#email");
let msgSubject = document.querySelector("#subject");
let msgMessage = document.querySelector("#message");

const mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


let form = document.querySelector(".form");
let submitBtn = document.querySelector(".submit");

form.addEventListener("change", ()=>{
    submitBtn.disabled = true;

    if(msgName.value != ""){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }

    if(msgEmail.value != "" && msgEmail.value !== mailReg){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }

    if(msgSubject.value != ""){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }

    if(msgMessage.value != ""){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }
});



/* function formValidation() {
    const submitBtn = document.querySelector(".submit__button");
    let msgName = document.forms["form"]["name"].value;
    let msgEmail = document.forms["form"]["email"].value;
    let msgSubject = document.forms["form"]["subject"].value;
    let msgMessage = document.forms["form"]["text"].value;
    
    submitBtn.disabled = false;
    
    if(msgName == ""){
        submitBtn.disabled = true;
    }
    else if(msgEmail == ""){
        submitBtn.disabled = true;
    }
    else if(msgSubject == ""){
        submitBtn.disabled = true;
    }
    else if(msgMessage == ""){
        submitBtn.disabled = true;
    }
    else{
        submitBtn.disabled = false;
    }
} */



/* //// NODE MAIL //// */
/* const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5500;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile('../html/contact.html');
});

app.post('/', (req, res)=>{
    console.log(req.body);
    });

app.listen(PORT, ()=>{
    console.log(`Server running:${PORT}`)
}); */