// Кнопка "ПОДРОБНЕЕ"

let btnMore = document.querySelector('div.button>button')
let content = document.querySelector('div.content')
let contentMore = document.querySelector('div.content__more')


btnMore.addEventListener('click', () => {
    // console.log(content = document.getElementById('hidden'));
    console.log(content.classList.contains('hidden'));

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
        content.classList.add('disabled')
        contentMore.classList.add('hidden')
        // contentMore.classList.remove('hidden')

    } else {
        content.classList.remove('disabled')
        content.classList.add('hidden')
        contentMore.classList.remove('hidden')
    }
    // console.log(contentMore.contains('hidden'))
    // contentMore.classList.add('hidden')
})

// СЛАЙДЕР

let btnLeft = document.querySelector('div.images>img.left')
let btnRight = document.querySelector('div.images>img.right')
let images = document.querySelectorAll('div.images>.slider img')

count = 0

btnLeft.addEventListener('click', () => {
    console.log('askdm');
    count++
    if (count >= images.length) {
        count = 0
    }

    for (const item of images) {
        item.classList.remove('hidden')
    }

    images[count].classList.add('hidden')
})

btnRight.addEventListener('click', () => {
    // console.log('askdm');
    count--
    if (count < 0) {
        count = images.length - 1
    }

    for (const item of images) {
        item.classList.remove('hidden')
    }

    images[count].classList.add('hidden')
})
