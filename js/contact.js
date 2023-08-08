/* MAIL MODAL */
const modal = document.querySelector(".mailModal");
const open = document.querySelector(".envelope_button");
const close = document.querySelector(".close");

open.onclick = function(){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}



/* //// NODE MAIL //// */
const express = require('express');
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
});