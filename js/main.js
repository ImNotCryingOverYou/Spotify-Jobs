window.onload = function () {





    //////////////////////////////////////////////////////------HEADER-FIXED-BLOCK-NAVIGATION------//////////////////////////////////////////////////////


    let timeOut = 0;
    let headLogo = document.getElementById('head-logo');
    let lastScrollY = 0;
    let headerNavigation = document.getElementById('header');

    window.addEventListener('scroll', function () {

        if (window.pageYOffset == 0) {
            header.classList.remove('blurry-header');
            headLogo.src = 'img/logo.svg';
        } else {
            header.classList.add('blurry-header')
            headLogo.src = 'img/black-logo.svg'
        }
        if (lastScrollY < window.pageYOffset) {
            lastScrollY = window.pageYOffset;
            headerNavigation.style.transform = "translateY(-100%)";
        }
        if (lastScrollY > window.pageYOffset) {
            lastScrollY = window.pageYOffset;
            headerNavigation.style.transform = "translateY(0%)";
        }

    });


















    //////////////////////////////////////////////////////------MAIN-FLOATING-BLOCKS------//////////////////////////////////////////////////////


    function setTranslateInterval() {
        intervalId = setInterval(function () {
            translateCount1 -= 0.3;
            translateCount2 -= 0.3;

            floatDiv.style.transform = 'translateY(' + translateCount1 + 'px)';
            floatDiv2.style.transform = 'translateY(' + translateCount2 + 'px)';
            if ((translateCount1 * - 1) > (floatDiv.offsetHeight)) {
                translateCount1 = floatDiv2.offsetHeight;
            };
            if ((translateCount2 * - 1) > (floatDiv.offsetHeight * 2)) {
                translateCount2 = 0;
            };
        }, 5);
    }
    let floatDiv = document.getElementById('inner-1');
    let floatDiv2 = document.getElementById('inner-2');

    let intervalId = 0;
    setTranslateInterval();

    let translateCount1 = 0;
    let translateCount2 = 0;

    Array.prototype.forEach.call(floatDiv.getElementsByTagName('a'), a => {
        a.onmouseover = function () {
            clearInterval(intervalId);
        }
        a.onmouseout = function () {
            setTranslateInterval();
        }
    });

    Array.prototype.forEach.call(floatDiv2.getElementsByTagName('a'), a => {
        a.onmouseover = function () {
            clearInterval(intervalId);
        }
        a.onmouseout = function () {
            setTranslateInterval();
        }
    });








    //////////////////////////////////////////////////////////------HEADER-INPUT-FIELD------//////////////////////////////////////////////////////

    let inputContainer = document.querySelector('#search-container');
    let inputField = document.querySelector('#search-input');


    inputContainer.onclick = function () {
        inputField.focus();
    }
    inputField.onfocus = function () {
        inputContainer.classList.add('head-search-container_focus');
        inputContainer.getElementsByTagName('img')[0].src = 'img/icons/black-search.svg'
    }
    inputField.onblur = function () {
        inputField.value = '';
        inputContainer.classList.remove('head-search-container_focus');
        inputContainer.getElementsByTagName('img')[0].src = 'img/icons/search.svg'
    }















    //////////////////////////////////////////////////////////-------INSPIRATION-BLOCK------//////////////////////////////////////////////////////

    function changeInspirationItem(wrapper, imgSrc, titleValue, textValue) {
        let contentBox = document.createElement('div');
        contentBox.classList.add('row');

        let imgBox = document.createElement('div');
        imgBox.classList.add('col-8', 'col-offset-2');
        contentBox.append(imgBox);

        let img = document.createElement('img');
        img.src = imgSrc;
        imgBox.append(img);


        let textContainer = document.createElement('div');
        textContainer.classList.add('col-offset-2', 'col-12');
        contentBox.append(textContainer);

        let title = document.createElement('h1');
        title.innerHTML = titleValue;
        textContainer.append(title);

        let textBox = document.createElement('div');
        textBox.classList.add('inspiration-text');
        textContainer.append(textBox);

        let text = document.createElement('p');
        text.innerHTML = textValue;
        textBox.append(text);

        let btnWrapper = document.createElement('div');
        btnWrapper.classList.add('mt-40');
        textContainer.append(btnWrapper);

        let btn = document.createElement('a');
        btn.innerHTML = 'Read more';
        btn.href = '#';
        btn.classList.add('btn');
        btnWrapper.append(btn);

        wrapper.classList.add('fade-out');

        setTimeout(function () {
            wrapper.innerHTML = '';
            wrapper.append(contentBox);
            wrapper.classList.remove('fade-out');
        }, 250);

    }



    let inspiration = document.querySelector('#inspiration-list').children;

    inspiration[0].onclick = function () {
        if (this.classList.contains('active')) return;

        inspiration[1].classList.remove('active');
        inspiration[2].classList.remove('active');

        this.classList.add('active');

        let wrapper = document.getElementById('content-box');

        let title = 'One band, no solo artists';
        let imgSrc = 'img/decorations/orchestr.svg';
        let text = 'It’s our culture. It’s our values. It’s who we are and what we’re not. It’s why we do things the way we do and why that matters. It’s all here in our band manifesto.';
        changeInspirationItem(wrapper, imgSrc, title, text);
    }

    inspiration[1].onclick = function () {
        if (this.classList.contains('active')) return;

        inspiration[0].classList.remove('active');
        inspiration[2].classList.remove('active');

        this.classList.add('active');

        let wrapper = document.getElementById('content-box');

        let title = 'Everyone has a part to play';
        let imgSrc = 'img/decorations/plants.svg';
        let text = 'We don’t just want you to feel like you belong here, we want you to feel like you can thrive here. No two creators or listeners are the same, so at Spotify, neither are we.'
        changeInspirationItem(wrapper, imgSrc, title, text);
    }

    inspiration[2].onclick = function () {
        if (this.classList.contains('active')) return;

        inspiration[0].classList.remove('active');
        inspiration[1].classList.remove('active');

        this.classList.add('active');

        let wrapper = document.getElementById('content-box');

        let title = 'Nine to five? No thanks';
        let imgSrc = 'img/decorations/clock.svg';
        let text = 'Clock on, clock off just isn’t our vibe. We want you to feel like you can come to work with a spring in your step, passion for what you do, and the desire to keep growing.'
        changeInspirationItem(wrapper, imgSrc, title, text);
    }






    //////////////////////////////////////////////---SLIDER---////////////////////////////////////////////////////////////////////////////////





    function setSwiper(counter = 0, fast = null) {
        swiperContainer = document.getElementById('swiper-container');
        slideWidth = (document.body.clientWidth - insideBlockWidth * 3) / 2 + insideBlockWidth;
        offsetSlide = (document.body.clientWidth - insideBlockWidth * 3) / 4;
        slides.forEach((slide) => {
            slideWidth = (swiperContainer.clientWidth - insideBlockWidth * 3) / 2 + insideBlockWidth;
            slide.style.width = slideWidth + 'px';
        });

        if (fast) {
            swiperContainer.style.transition = 'none'
            setTimeout(() => {
                swiperContainer.style.transition = 'all 550ms ease 0s'
            }, 100);
        }

        swiperContainer.style.transform = 'translate3d(' + ((slideWidth + 20) * counter - offsetSlide) + 'px,0,0)';
    }


    let currentSlide = 3;

    function activateSlide(noClear = false, next = null) {
        if (!noClear) {
            slides.forEach((slide) => {
                slide.getElementsByTagName('a')[0].classList.remove('slide-anchor-wrapper_active');
            });
        }
        if (next) {
            if (currentSlide >= (slides.length - 2)) {
                currentSlide = 1;
            }
            currentSlide++;
        } else {
            if (currentSlide <= 1) {
                currentSlide = slides.length - 2;
            }
            currentSlide--;
        }
        slides[currentSlide].getElementsByTagName('a')[0].classList.add('slide-anchor-wrapper_active');
    }

    //init swiper
    let slides = document.querySelectorAll('.carousel-section .swiper-slide');
    let insideBlockWidth = slides[0].getElementsByTagName('a')[0].offsetWidth;
    let swiperContainer = document.getElementById('swiper-container');
    let offsetSlide = (document.body.clientWidth - insideBlockWidth * 3) / 4;
    let slideWidth = (document.body.clientWidth - insideBlockWidth * 3) / 2 + insideBlockWidth;
    let itemsCount = slides.length;

    let counter = -2;

    setSwiper(counter, true);

    //resize with window
    window.onresize = function () {
        setSwiper(counter, true);
    }

    //btns

    let swipeLeftBtn = document.getElementById('swipe-left-btn');
    let swipeRightBtn = document.getElementById('swipe-right-btn');


    let throttle = false;

    swipeLeftBtn.onclick = function () {
        if (throttle) return false;
        throttle = true;
        setTimeout(() => throttle = false, 600);

        counter++

        setTimeout(() => {
            activateSlide();
        }, 550)


        setSwiper(counter);

        if (counter == 0) {

            setTimeout(() => {
                currentSlide = 5;
                activateSlide(true);
                setSwiper(counter = -3, true);
            }, 550);
        }

    }

    swipeRightBtn.onclick = function () {
        if (throttle) return false;
        throttle = true;
        setTimeout(() => throttle = false, 600);

        counter--;
        setTimeout(() => {
            activateSlide(null, true);

        }, 550);


        setSwiper(counter);
        if (counter == -4) {
            setTimeout(() => {
                currentSlide = 3;
                activateSlide(true);
                setSwiper(counter = -1, true);
            }, 550);
        }
    }
    //////////////////////////////////////////////////////////-------CHANGE-BG-COLOR------//////////////////////////////////////////////////////


    function changeBodyColor() {
        let bodyHeight = document.body.offsetHeight;

        if (bodyHeight / 10 * 2 > window.scrollY) {
            document.body.style.backgroundColor = 'fff'
            document.body.classList.remove('bg-dark-blue')
        }
        if (bodyHeight / 12 * 2 < window.scrollY && bodyHeight / 12 * 4 > window.scrollY) {
            document.body.style.background = '';
            document.body.classList.add('bg-dark-blue');
        }
        if (bodyHeight / 12 * 4 < window.scrollY && bodyHeight / 12 * 6 > window.scrollY) {
            document.body.style.background = '#fff';
            document.body.classList.remove('bg-dark-blue');
        }
        if (bodyHeight / 12 * 6 < window.scrollY && bodyHeight / 12 * 7.5 > window.scrollY) {
            document.body.style.background = '#ffcdd2';
        }
        if (bodyHeight / 12 * 7.5 < window.scrollY) {
            document.body.style.background = '#fff';
        }

    }

    window.onscroll = function () { changeBodyColor(); }





    //////////////////////////////////////////////////////////-------DRAG & DROP BLOCK------//////////////////////////////////////////////////////



    let dragWrapper = document.querySelector('#fresh-swiper');
    dragWrapper.onmousedown = function (event) {
        this.style.userSelect = 'none';
        let shiftX = event.clientX - dragWrapper.getBoundingClientRect().left;
        let shiftY = event.clientX - dragWrapper.getBoundingClientRect().top;

        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            dragWrapper.style.transform = 'translateX(' + (pageX - shiftX) / 3.2 + 'px)';
            dragWrapper.style.transition = 'translateY(' + (pageX - shiftX) / 3.5 + 'px)';
            dragWrapper.style.transition = 'all 0ms ease 0s';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            dragWrapper.style.transform = 'translateX(' + 0 + 'px)';
            dragWrapper.style.transform = 'translateY(' + 0 + 'px)';

            dragWrapper.style.transition = 'all 550ms ease 0s';
            dragWrapper.onmouseup = null;
        };
    };

    dragWrapper.ondragstart = function () {
        return false;
    };








    //////////////////////////////////////////////////////////-------FLOATING-ROWS------//////////////////////////////////////////////////////

    function FloatRow(row, rowDuplicate, vector = true) {
        this.row = row;
        this.vector = vector;
        this.rowDuplicate = rowDuplicate;
        this.interval = false;
        this.translateRow = 0;
        this.translateRowDuplicate = 0;
        this.setRowsInterval = () => {
            this.interval = setInterval(() => {
                if (this.vector) {
                    this.translateRow -= 0.02;
                    this.translateRowDuplicate -= 0.02;
                    if (this.translateRow <= -100) this.translateRow = 100;
                    if (this.translateRowDuplicate <= -200) this.translateRowDuplicate = 0;

                    this.row.style.transform = 'translateX(' + this.translateRow + '%)';
                    this.rowDuplicate.style.transform = 'translateX(' + this.translateRowDuplicate + '%)';
                } else {
                    this.translateRow += 0.02;
                    this.translateRowDuplicate += 0.02;
                    if (this.translateRow >= 100) this.translateRow = -100;
                    if (this.translateRowDuplicate > 0) this.translateRowDuplicate = -200;
                    this.row.style.transform = 'translateX(' + this.translateRow + '%)';
                    this.rowDuplicate.style.transform = 'translateX(' + this.translateRowDuplicate + '%)';
                }
            }, 5);
        };
        this.setHoverAction = () => {
            Array.prototype.forEach.call(this.row.getElementsByTagName('a'), a => {
                a.onmouseover = () => {
                    clearInterval(this.interval);
                }
                a.onmouseout = () => {
                    this.setRowsInterval();
                }
            });
            Array.prototype.forEach.call(this.rowDuplicate.getElementsByTagName('a'), a => {
                a.onmouseover = () => {
                    clearInterval(this.interval);
                }
                a.onmouseout = () => {
                    this.setRowsInterval();
                }
            });
        }
        this.init = () => {
            this.setRowsInterval();
            this.setHoverAction();
        }
    }

    let row1 = document.getElementById('row1');
    let row2 = document.getElementById('row2');
    let row3 = document.getElementById('row3');
    let row4 = document.getElementById('row4');
    new FloatRow(row1.querySelectorAll('.location-scroll_scroll')[0], row1.querySelectorAll('.location-scroll_scroll')[1]).init();
    new FloatRow(row2.querySelectorAll('.location-scroll_scroll')[0], row2.querySelectorAll('.location-scroll_scroll')[1], false).init();
    new FloatRow(row3.querySelectorAll('.location-scroll_scroll')[0], row3.querySelectorAll('.location-scroll_scroll')[1]).init();
    new FloatRow(row4.querySelectorAll('.location-scroll_scroll')[0], row4.querySelectorAll('.location-scroll_scroll')[1], false).init();




    let goUpBtn = document.getElementById('go-up-btn');

    goUpBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: `smooth` })
    };


}


