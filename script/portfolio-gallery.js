const makeupMenu = document.querySelector('.portfolio-gallery-menu-makeup')
const hairstyleMenu = document.querySelector('.portfolio-gallery-menu-hairstyle')
const makeupGallery = document.querySelector('.portfolio-gallery-photos-makeup')
const hairstyleGallery = document.querySelector('.portfolio-gallery-photos-hairstyle')

hairstyleMenu.addEventListener('click', () => {
    hairstyleMenu.classList.add('active')
    makeupMenu.classList.remove('active')
    hairstyleGallery.classList.add('active')
    makeupGallery.classList.remove('active')
    
})

makeupMenu.addEventListener('click', () => {
    hairstyleMenu.classList.remove('active')
    makeupMenu.classList.add('active')
    hairstyleGallery.classList.remove('active')
    makeupGallery.classList.add('active')
    
})

