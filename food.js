const slides = document.querySelectorAll('.slide'),
      prev = document.getElementById('prev'),
      next = document.getElementById('next');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}
const prevSlide = () => {
    if(index == 0) {
       index = slides.length - 1;
       activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


new Swiper ('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    loopSlides: 3,
    braekpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});
new Swiper ('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    loopSlides: 3,
    braekpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});

