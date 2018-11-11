
// Burger Event --------------------------------------------------------------
var header = document.getElementById('header');
var navMobile = document.getElementById('nav-mobile');
var burger = document.getElementById('burger');
var logo = document.getElementById('logo');
var bttnLink = document.getElementById('bttnlink');
var bttnLink1 = document.getElementById('bttnlink1');
var bttnLink2 = document.getElementById('bttnlink2');

var burgerStatus = 0;

burger.addEventListener('click', showMenu);
bttnLink.addEventListener('click', function(){
   navMobile.style.width = '0';
   burgerStatus = 0;
});
bttnLink1.addEventListener('click', function(){
   navMobile.style.width = '0';
   burgerStatus = 0;
});
bttnLink2.addEventListener('click', function(){
   navMobile.style.width = '0';
   burgerStatus = 0;
});

function showMenu() {
   if(burgerStatus === 0 && window.pageYOffset < 10) {
      navMobile.style.width = '100%'; //Menu Show

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

      burgerStatus = 0;
   }
}
// Scroll Header --------------------------------------------------------------
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
   if(window.pageYOffset > 10) {
      header.style.height = '50px';
      logo.style.width = '90px';

   }
   else {
      header.style.height = '60px';
      logo.style.width = '100px';
   }
}
// Nav Menu Event --------------------------------------------------------------
// var portfolioNav = document.getElementById('portfolio');
// var skillsNav = document.getElementById('skills');
// var aboutNav = document.getElementById('about');

// portfolioNav.addEventListener('click', menuHide);

// function menuHide() {
//    navMobile.style.width = '0'; //Menu Hide
// }

// Banner Event --------------------------------------------------------------
// window.onload = bannerAnimate;

// var bannerImage = document.getElementById('bannerImage');
// var bannerText = document.getElementById('bannerText');

// function bannerAnimate() {
//    bannerImage.style.transform = 'translateY(0)';
//    bannerText.style.transform = 'translateY(0)';

// }
// Portfolio Hover --------------------------------------------------------------
var actvAngcoffee = document.getElementById('actv-angcoffee');
var actvAngcoffee1 = document.getElementById('actv-angcoffee');
var actvAngcoffee2 = document.getElementById('actv-angcoffee');
var angCoffee = document.getElementById('angcoffee');
var angCoffee1 = document.getElementById('angcoffee1');
var angCoffee2 = document.getElementById('angcoffee2');

angCoffee.addEventListener('mouseenter', portfolioHover);
angCoffee.addEventListener('mouseleave', portfolioLeave);

angCoffee1.addEventListener('mouseenter', portfolioHover);
angCoffee1.addEventListener('mouseleave', portfolioLeave);

angCoffee2.addEventListener('mouseenter', portfolioHover);
angCoffee2.addEventListener('mouseleave', portfolioLeave);


function portfolioHover() {
   //actvAngcoffee.style.display = 'flex';
   //actvAngcoffee.classList.toggle("m-fadeIn");
   // actvAngcoffee.style.visibility = 'visibility';
   actvAngcoffee.style.opacity = '1';
   // actvAngcoffee.style.transition = 'visibility 0s linear 0s, opacity 300ms;';
}

function portfolioLeave() {
   //actvAngcoffee.style.display = 'none';
   //actvAngcoffee.classList.toggle("m-fadeOut");
   // actvAngcoffee.style.visibility = 'hidden';
   actvAngcoffee.style.opacity = '0';
   // actvAngcoffee.style.transition = 'visibility 0s linear 0s, opacity 300ms;';
}

// Portfolio Hover --------------------------------------------------------------
var footerLogo = document.getElementById('footer-logo');

footerLogo.addEventListener('mouseenter', footerlogoChange);
footerLogo.addEventListener('mouseleave', footerlogoDefault);

function footerlogoChange() {
   footerLogo.src = 'images/logo-banner1.png';
}




