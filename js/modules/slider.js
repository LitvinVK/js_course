function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          sliderWrapper = document.querySelector(wrapper),
          sliderField = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width,
          slider = document.querySelector(container);

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;

    }

    sliderField.style.width = 100 * slides.length + '%';
    sliderField.style.display = 'flex';
    sliderField.style.transition = '0.5s all';

    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    
    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);
    }

    function addZero(length, i) {
        if (length < 10) {
            current.textContent = `0${i}`;
        } else {
            current.textContent = i;
        }
    }

    function selectedDot(arr, i) {
        arr.forEach(dot => dot.style.opacity = '');
        arr[i - 1].style.opacity = 1;
    }

    function delLetters(str) {
        return +str.replace(/\D/g, '');
    }

    const dots = document.querySelectorAll('.dot');
    dots[0].style.opacity = 1;
    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            slideIndex = dot.dataset.slideTo;
            offset = delLetters(width) * (slideIndex - 1);
    
            sliderField.style.transform = `translateX(-${offset}px)`;
    
            addZero(slides.length, slideIndex);

            selectedDot(dots, slideIndex);
        });
    });

    next.addEventListener('click', () => {
        if (offset == delLetters(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += delLetters(width);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZero(slides.length, slideIndex);

        selectedDot(dots, slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = delLetters(width) * (slides.length - 1);
        } else {
            offset -= delLetters(width);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZero(slides.length, slideIndex);

        selectedDot(dots, slideIndex);
    });
}

export default slider;