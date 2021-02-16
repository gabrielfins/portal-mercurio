var toggleNav = false;

window.onresize = () => {
  if (toggleNav !== false) {
    if (window.innerWidth <= 370) {
      sideNav.style.width = '100%';
    } else {
      sideNav.style.width = '370px';
    }
  }
}

function toggleNavbar() {
  let sideNav = document.getElementById('sideNav');
  let darkOverlay = document.getElementById('darkOverlay');

  if (toggleNav === false) {
    sideNav.style.visibility = 'visible';
    if (window.innerWidth <= 370) {
      sideNav.style.width = '100%';
    } else {
      sideNav.style.width = '370px';
    }
    darkOverlay.style.visibility = 'visible';
    darkOverlay.style.opacity = 1;
    document.body.style.overflow = 'hidden';
    toggleNav = !toggleNav;
  } else {
    sideNav.style.visibility = 'hidden';
    sideNav.style.width = '0';
    darkOverlay.style.visibility = 'hidden';
    darkOverlay.style.opacity = 0;
    document.body.style.overflow = 'auto';
    toggleNav = !toggleNav;
  }
}

function toggleCathegory(e) {
  if (!e) e = window.event;

  let sender = e.target;
  let open = document.getElementById(sender.getAttribute('data-target'));

  if (open.style.display === 'flex') {
    open.style.display = 'none';
    sender.classList.remove('side-nav-btn-selected');
  } else {
    let buttons = document.getElementsByClassName('side-nav-btn');
    let closed = document.getElementsByClassName('cathegory-news');

    for (let i = 0; i < closed.length; i++) {
      closed.item(i).style.display = 'none';
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons.item(i).classList.remove('side-nav-btn-selected');
    }

    sender.classList.add('side-nav-btn-selected');
    open.style.display = 'flex';
  }
}

$(".ripple-effect, .button").on("mousedown", function(e) {
  let r = findFurthestPoint(e.clientX, this.clientWidth, this.offsetLeft, e.clientY, this.clientHeight, this.offsetTop);

  let circle =  document.createElement("span");
  circle.classList.add("ripple");
  
  circle.style.top = e.clientY + window.scrollY - this.offsetTop - r + "px";
  circle.style.left = e.clientX + window.scrollX - this.offsetLeft - r + "px";
  
  circle.style.width = circle.style.height = r * 2 + "px";
  
  $(this).prepend(circle);
});

$(".ripple-effect, .button").on("mouseup mouseleave dragleave", function() {
  let ripple = $(this).find(".ripple");
  if (ripple.lenght != 0) {
      ripple.css("opacity", '0');
      setTimeout(() => {
          ripple.last().remove()
      }, 300);
  }
});

function findFurthestPoint(clickPointX, elementWidth, offsetX, clickPointY, elementHeight, offsetY) {
  let x = clickPointX + window.scrollX - offsetX > elementWidth / 2 ? 0 : elementWidth;
  let y = clickPointY + window.scrollY - offsetY > elementHeight / 2 ? 0 : elementHeight;
  let d = Math.hypot(x - (clickPointX + window.scrollX - offsetX), y - (clickPointY + window.scrollY - offsetY));
  return d;
}
