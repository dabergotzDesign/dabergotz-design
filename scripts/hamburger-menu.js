function HamburgerMenu() {
    var x = document.querySelector(".navigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }


  