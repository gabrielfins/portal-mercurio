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

function toggleCategory(e) {
  if (!e) e = window.event;

  let sender = e.target;
  let open = document.getElementById(sender.getAttribute('data-target'));

  if (open.style.height === '78px') {
    open.style.height = '0';
    sender.classList.remove('side-nav-btn-selected');
  } else {
    let buttons = document.getElementsByClassName('side-nav-btn');
    let closed = document.getElementsByClassName('category-news-container');

    for (let i = 0; i < closed.length; i++) {
      closed.item(i).style.height = '0';
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons.item(i).classList.remove('side-nav-btn-selected');
    }

    sender.classList.add('side-nav-btn-selected');
    open.style.height = '78px';
  }
}
