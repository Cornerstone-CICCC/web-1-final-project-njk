const hamMenu = document.querySelector('.hamburger-menu')
const headMenuLeft = document.querySelector('#left-menu')
const headMenuRight = document.querySelector('#right-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    headMenuLeft.classList.toggle('active')
    headMenuRight.classList.toggle('active')
})