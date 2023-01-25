let submenu = document.querySelector('.header__drop__down__menu');

let openButton = document.querySelector('.header__sub__menu');
let closeButton = document.querySelector('.drop__down__menu__close__button');


openButton.addEventListener('click', () => {
   submenu.classList.remove('header__drop__down__menu-close');
});
closeButton.addEventListener('click', () => {
   submenu.classList.add('header__drop__down__menu-close');
});


console.log("PAMAGITIIII");