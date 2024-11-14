const hamMenu = document.querySelector('.hamburger-menu')
const hiddenMenu = document.querySelector('.header-menu-hidden')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    hiddenMenu.classList.toggle('active')
})