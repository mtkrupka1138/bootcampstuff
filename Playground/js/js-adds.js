// Code for toggle on/off site nav bar/menu

const buttonNavMenu = document.getElementById('offSiteMenu');
const body = document.body;
buttonNavMenu.addEventListener('click', event => {
    body.classList.toggle('off-site-menu-open')
})