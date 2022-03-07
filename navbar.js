const menu = document.querySelector('.burger');
const exit = document.querySelector('.wrong');
const NavMenu = document.querySelector('.menu-bar');

menu.addEventListener("click", () => {
    menu.classList.add('menu-disappear');
    NavMenu.classList.add('bring-back');
    exit.classList.remove('wrong');
});
exit.addEventListener("click", () => {
    exit.classList.add('wrong');
    NavMenu.classList.remove('bring-back');
    menu.classList.remove('menu-disappear');
});