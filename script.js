let leftBubble = document.querySelector('#pattern1')
let rightBubble = document.querySelector('#pattern2')

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

document.onmousemove = e => {
    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight

    leftBubble.style.transform = `translate(-${x * 50}px, ${y * 50}px)`
    rightBubble.style.transform = `translate(-${x * 50}px, ${y * 50}px)`
}



document.querySelectorAll('.first').forEach((el) => {
    let content = el.nextElementSibling;
    let child = el.querySelector('.open_close')
    content.style.maxHeight = content.scrollHeight + 'px'
    el.style.borderBottom = '0'
    child.style.transform = 'rotateZ(180deg)'
})

document.querySelectorAll('.section').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        let child = el.querySelector('.open_close')
        if (content.style.maxHeight) {
            document.querySelectorAll('.conten').forEach((el) => el.style.maxHeight = null)
            el.style.borderBottom = '1px solid #E7EBF0'
            child.style.transform = 'rotateZ(0deg)'
        } else {
            document.querySelectorAll('.conten').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.section').forEach((el) => el.style.borderBottom = '1px solid #E7EBF0')
            document.querySelectorAll('.open_close').forEach((el) => el.style.transform = 'rotateZ(0deg)')
            content.style.maxHeight = content.scrollHeight + 'px'
            el.style.borderBottom = '0'
            child.style.transform = 'rotateZ(180deg)'
        }
    })
})