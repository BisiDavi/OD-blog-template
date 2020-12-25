let navMenuState = false;
let sideNavWidth = 0;

function openNav() {
  const sideNav = document.getElementById('sidenav');
  sideNavWidth = sideNav.style.width = '250px';
  console.log('sideNavWidth', sideNavWidth);
  document.getElementById('main').style.marginLeft = '250px';
  sideNavWidth.length > 2 ? (navMenuState = true) : null;

  return navMenuState
    ? document.getElementById('sidebarOverlay').classList.add('active')
    : null;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById('sidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.getElementById('sidebarOverlay').classList.remove('active');
}
