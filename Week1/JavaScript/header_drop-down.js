let submenu = document.querySelector('.header__drop__down__menu');
let subMenuMobile = document.querySelector('.burger__menu__mobile');
let openButton = document.querySelector('.header__sub__menu');
let closeButton = document.querySelector('.drop__down__menu__close__button');


openButton.addEventListener('click', () => {
   submenu.classList.remove('header__drop__down__menu-close');
});
closeButton.addEventListener('click', () => {
   submenu.classList.add('header__drop__down__menu-close');
});

console.log("PAMAGITIIII");

let dropdown = document.querySelectorAll('.drop-down');

dropdown.forEach(item => {
   item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
         item.classList.remove('active');
      } else {
         item.classList.toggle('active');
      }
   });
});

console.log("PAMAGITIIII");

openButton.addEventListener('click', () => {
   const screenWidth = document.documentElement.clientWidth;

   if (screenWidth > 720) {
      submenu.classList.remove('header__drop__down__menu-close');
   } else {
      subMenuMobile.classList.toggle('header__drop__down__menu-close');
      submenu.classList.toggle('header__drop__down__menu-close');
   }
});

console.log("PAMAGITIIII");
