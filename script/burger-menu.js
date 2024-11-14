const hamMenu = document.querySelector('.hamburger-menu')
const hiddenMenu = document.querySelector('.header-menu-hidden')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    hiddenMenu.classList.toggle('active')
})

// window.addEventListener("resize", () => {
//     if(window.innerWidth > 1200){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// })

// if(window.innerWidth < 1200){
//     console.log("Hi")
// }