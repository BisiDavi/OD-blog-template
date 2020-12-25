let navMenuState = false;
let sideNavWidth = 0;
function openNav() {
  const sideNav = document.getElementById('sidenav');
  sideNavWidth = sideNav.style.width = '250px';
  console.log('sideNavWidth', sideNavWidth);
  document.getElementById('main').style.marginLeft = '250px';
  sideNavWidth.length > 2 ? (navMenuState = true) : null;
  console.log('navMenuState', navMenuState);
  return navMenuState;
}

const navOverlay = document.getElementById('sidebarOverlay');
const navActive = navOverlay.classList.add('active');

navMenuState
  ? console.log('navActive', navOverlay)
  : console.log('navRemove', navOverlay.classList.remove('active'));

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById('sidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
}
