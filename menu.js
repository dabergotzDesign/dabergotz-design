function hamMenu() {
  var x = document.getElementById("navDrop");
  console.log(x);
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
