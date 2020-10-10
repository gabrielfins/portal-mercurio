window.onscroll = function() {fixNav()};


var sticky = navbar.offsetTop;

function AnimateDropdown(){

}

function fixNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
