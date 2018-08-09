
// Burger Event --------------------------------------------------------------
var header = document.getElementById('header');
var navMobile = document.getElementById('nav-mobile');
var burger = document.getElementById('burger');
var logo = document.getElementById('logo');

burger.addEventListener('click', showMenu);

var burgerStatus = 0;

function showMenu() {
   if(burgerStatus === 0 && window.pageYOffset < 10) {
      navMobile.style.width = '100%'; //Menu Show
      header.style.background = 'rgba(99, 65, 165, 1)'; //Header Color

      burgerStatus = 1;
   }
   else if(burgerStatus === 0) { // Whem Header is on Top
      navMobile.style.width = '100%'; //Menu Show

      burgerStatus = 1;
   }
   else if(burgerStatus === 1 && window.pageYOffset > 10) { // When Header is on top
      navMobile.style.width = '0'; //Menu Hide

      burgerStatus = 0;
   }
   else if(burgerStatus === 1) {
      navMobile.style.width = '0'; //Menu Hide
      header.style.background = 'transparent'; //Header Transparent

      burgerStatus = 0;
   }
}
// Scroll Header --------------------------------------------------------------
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
   if(window.pageYOffset > 10) {
      header.style.background = 'rgba(99, 65, 165, 1)';
      header.style.height = '50px';
      logo.style.width = '90px';

   }
   else {
      header.style.background = 'transparent';
      header.style.height = '60px';
      logo.style.width = '100px';
   }
}






