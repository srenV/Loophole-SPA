import navigate from "./router.js"

const menuButton = document.getElementById('menuButton')
const menuCloseButton = document.getElementById('menuCloseButton')
const menu = document.getElementById('menu')
const linkButtons = document.querySelectorAll('.linkButton')


document.addEventListener('DOMContentLoaded', () => {
    navigate('home')
})


menuButton.addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)'
    document.body.style.overflowY = 'hidden'
})

menuCloseButton.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
    document.body.style.overflowY = 'auto'
})

linkButtons.forEach((button) => {
    const route = button.dataset.route;
    button.addEventListener('click', () => {
        if(!route) return
        navigate(route)

        menu.style.transform = 'translateX(100%)'
        document.body.style.overflowY = 'auto'
    })
})
