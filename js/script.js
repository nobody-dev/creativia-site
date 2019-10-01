"use strict"

document.ready = (() => {
    
    // плавная прокрутка к элементам меню по клику:
    let menuList = document.querySelector(".nav__list");

    menuList.addEventListener("click", (event) => {
        event.preventDefault(); 
        let id = event.target.getAttribute("href");
        let element = document.querySelector(id);
        element.scrollIntoView ({
            behavior: 'smooth',
            block: 'start'
        });
    });

    //Слайдер 
    let leftArrow = document.querySelector(".home__left-arrow"),
        rightArrow = document.querySelector(".home__right-arrow"),
        sliderText = document.querySelector(".home__text"),
        sliderButtons = document.querySelector(".home__buttons"),
        home = document.querySelector(".home");

    let num = 1;
    checkSlides();

        //переключатели
    leftArrow.addEventListener("click", () => {
        sliderText.textContent = "";
        if (num !== 1) {
            num -= 1;
        } else {
            num = 3;
        } 
        checkSlides();
    });

    rightArrow.addEventListener("click", () => {
        sliderText.textContent = "";
        if (num !== 3) {
            num += 1;
        } else {
            num = 1;
        }
        checkSlides();
    });
        //авто переключение свайпа
    let timerId = setInterval(function sliderChange() {
        sliderText.textContent = "";
        if (num !== 3) {
            num += 1;
        } else {
            num = 1;
        }
        checkSlides();
    }, 5000);
    home.addEventListener("mouseover", () => {
        clearInterval(timerId);
    });
    home.addEventListener("mouseout", () => {
        timerId = setInterval(function sliderChange() {
            sliderText.textContent = "";
            if (num !== 3) {
                num += 1;
            } else {
                num = 1;
            }
            checkSlides();
        }, 5000);
    });

        //изменение контента слайдера
    function checkSlides() {
        if (num == 1) {
            sliderText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident pariatur nesciunt ducimus<br> dolores eos sequi ab at vero dolor, blanditiis iusto praesentium optio rem laborum.<br> Accusamus eos non corporis?";
            sliderButtons.style.display = "flex";
            home.style.backgroundImage = 'url("css/img/header-bg-new.png")';
        } else if (num == 2) {
            sliderText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br> dolores eos sequi blanditiis iusto praesentium optio rem laborum.<br> Accusamus eos non corporis?";
            sliderButtons.style.display = "none";
            home.style.backgroundImage = 'url("css/img/home-bg-2.png")';
        } else if (num == 3) {
            sliderText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit provident pariatur nesciunt ducimus";
            sliderButtons.style.display = "none";
            home.style.backgroundImage = 'url("css/img/home-bg-3.png")';
        }
    }

    let tab = document.querySelectorAll(".discovery__title"),
        tabContent = document.querySelectorAll(".discovery__content"),
        plus = document.querySelectorAll(".fa-plus"),
        minus = document.querySelectorAll(".fa-minus"),
        tabList = document.querySelector(".content__left-side");
    
    
    //функция для отключения всего контента табов
    function tabsHide(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].style.height = "";
            plus[i].style.transform = "rotate(0deg)";
            plus[i].style.opacity = "1";
            minus[i].style.transform = "rotate(0deg)";
        }
    }
    //Функция для показа определенного таба
    function tabsShow(i) {
        if( tabContent[i].style.height == "") {
            tabContent[i].style.height = "91px";
            plus[i].style.transform = "rotate(360deg)";
            plus[i].style.opacity = "0";
            minus[i].style.transform = "rotate(360deg)";
        }
    }
    //Обработка клика, определяем таргет, закрываем все табы и открываем нужный с помощью проверки.
    tabList.addEventListener("click", function(event) {
        let element = event.target.closest(".discovery__title");
        let elementContainer = event.target.closest(".left-side__discovery");

        if( elementContainer.querySelector(".discovery__content").style.height !== ""){
            tabsHide(0);
            return false;
        }
        if(element){
            for (let i = 0; i < tab.length; i++) {
                if (element == tab[i]) {
                    tabsHide(0);
                    tabsShow(i);
                    break;
                }
            }
        }
    });
})();
$(document).ready(function(){


    //функция проверки позиции экрана для активации функции заполнения процентов и svg-кругов
    function checkCircle(){
        setTimeout(checkCircle,100);
        if(pageYOffset > 4850 && pageYOffset < 5639) {
            numbersUp();
            circleUp();
        }
    };
    checkCircle();
    
    //Функция заполнения svg-кругов
    function circleUp(){
        $('.bar').each((i, element)=>{

            let val = $(".score__number").eq(i).attr("number");
            console.log(val);
            let $circle = $(element);
            let r = $circle.attr('r');
            let c = Math.PI*(r*2);
            
            let pct = ((((100-val)/100)*c)+125);
            
            $circle.css({strokeDashoffset: pct});
        });
    };
    //Функция заполнения процентов
    function numbersUp(){
        $('.score__number').each((i, element)=>{
            let finishNum = $(element).attr("number");
            let num = $(element).text();
            
            let numbersInterval = setInterval(function() {
                if(num == finishNum){
                    clearTimeout(numbersInterval);
                } else {
                    $(element).text(++num);
                }
            }, 30);
        });
    }

    //Плагин сортировки MixItUp
    var mixer = mixitup('.container');
    var mixer = mixutup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    })
});