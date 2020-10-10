var toggleNav = false;

function toggleNavbar() {
  let sideNav = document.getElementById('sideNav');
  let darkOverlay = document.getElementById('darkOverlay');

  if (toggleNav === false) {
    sideNav.style.visibility = 'visible';
    sideNav.style.width = '370px';
    darkOverlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    toggleNav = !toggleNav;
  } else {
    sideNav.style.visibility = 'collapse';
    sideNav.style.width = '0';
    darkOverlay.style.visibility = 'collapse';
    document.body.style.overflow = 'scroll';
    toggleNav = !toggleNav;
  }
}

function toggleCathegory(e) {
  if ( !e ) e = window.event;

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