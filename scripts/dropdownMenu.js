/* When click on button, toggle between hiding and showing */
function gameDropdown() {
    document.getElementById("gameDropMenu").classList.toggle("show");
}

//Close dropdown
window.onclick = function(event) {
    if(!event.target.matches('.dropBtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if(openDropdown.classList.contains('show')){
             openDropdown.classList.remove('show');
         }            
        }
    }
}