window.addEventListener('DOMContentLoaded', () => {


    //mainmenu

    let mainMenu = document.querySelector(".header__mainmenu"),
    tab = document.querySelectorAll(".header__item"),
    tab2 = document.querySelector(".header__item--last");

    mainMenu.addEventListener('click', (e) => {

        const area = e.target.closest(".header__item");

        if (area) {
            tab.forEach((item, i) => {
                if (item === area) {
                    tab[i].classList.add("header__active");
                    tab2.classList.add("header__active2");
                } else {    
                    tab[i].classList.remove("header__active");
                    tab2.classList.remove("header__active2");
                }
            });
        }    
    });



    //mainmenu animation

    function menuAnim() {
        const headerLine = document.getElementById("header-line"),
        headerButton = document.querySelector(".header__button"),
        headerWrapper = document.querySelector(".header__wrapper");
        window.onscroll = function() {
            let a = window.pageYOffset;
            a <= 80 ? (headerLine.classList.contains("header__line--finish") 
            && headerLine.classList.remove("header__line--finish"), 
            headerWrapper.classList.contains("header__wrapper--finish") 
            && headerWrapper.classList.remove("header__wrapper--finish"), 
            headerLine.classList.add("header__line--start"), 
            headerWrapper.classList.add("header__wrapper--start"), 
            headerButton.lastElementChild.style.paddingTop = "1.3rem", 
            headerButton.lastElementChild.style.paddingBottom = "1.3rem") 
            : a > 80 && (headerLine.classList.contains("header__line--start") 
            && headerLine.classList.remove("header__line--start"), 
            headerWrapper.classList.contains("header__wrapper--start") 
            && headerWrapper.classList.remove("header__wrapper--start"), 
            headerLine.classList.add("header__line--finish"), 
            headerWrapper.classList.add("header__wrapper--finish"), 
            headerButton.lastElementChild.style.paddingTop = "0.3rem", 
            headerButton.lastElementChild.style.paddingBottom = "0.3rem")
        }, history.scrollRestoration = "manual";
    };
    menuAnim();



    //верхние кнопки блока продаж

    let subMenu = document.querySelector('.sales-block__submenu'),
    subItem = document.querySelectorAll('.sales-block__item');

    subMenu.addEventListener('click', (e) => {

        const area2 = e.target.closest('.sales-block__item');

        if (area2) {
            subItem.forEach((item, i) => {
                if (item === area2) {
                    subItem[i].classList.add("sales-block__item--active");
                } else {    
                    subItem[i].classList.remove("sales-block__item--active");
                }
            });
        }    
    });


    //список -1


    const selectHeader = document.querySelector('.select__header');
    const selectBody = document.querySelector('.select__body');
    const selectItem = document.querySelectorAll('.select__item');
    const selectTitle = document.querySelector('.select__title');
    const selectImg = document.querySelector('.select__header img');


    selectHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (selectBody.classList.contains('select__body--active')) {
            selectBody.classList.remove('select__body--active');
            selectImg.style.transform = 'rotate(0deg)';
            selectBody.style.maxHeight = null;
        }    else {
            selectBody.classList.add('select__body--active');
            selectImg.style.transform = 'rotate(180deg)';
            selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
        }    
    });

    selectItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            selectTitle.textContent = item.textContent;
            selectBody.classList.remove('select__body--active');
            selectImg.style.transform = 'rotate(0deg)';
            selectBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== selectBody) {
            selectBody.classList.remove('select__body--active');
            selectImg.style.transform = 'rotate(0deg)';
            selectBody.style.maxHeight = null;
        }
    }); // если клик вне списка


    //список -2

    const selectHeader2 = document.querySelector('.select__header-2');
    const selectBody2 = document.querySelector('.select__body-2');
    const selectItem2 = document.querySelectorAll('.select__item-2');
    const selectTitle2 = document.querySelector('.select__title-2');
    const selectImg2 = document.querySelector('.select__header-2 img');

    selectHeader2.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (selectBody2.classList.contains('select__body--active')) {
            selectBody2.classList.remove('select__body--active');
            selectImg2.style.transform = 'rotate(0deg)';
            selectBody2.style.maxHeight = null;
        }    else {
            selectBody2.classList.add('select__body--active');
            selectImg2.style.transform = 'rotate(180deg)';
            selectBody2.style.maxHeight = selectBody2.scrollHeight + 'px';
        }
    });

    selectItem2.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            selectTitle2.textContent = item.textContent;
            selectBody2.classList.remove('select__body--active');
            selectImg2.style.transform = 'rotate(0deg)';
            selectBody2.style.maxHeight = null;
        })
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== selectBody2) {
            selectBody2.classList.remove('select__body--active');
            selectImg2.style.transform = 'rotate(0deg)';
            selectBody2.style.maxHeight = null;
        }
    }); // если клик вне списка


    //mobile menu

    const burger = document.querySelector('.header__burger'),
        cross = document.querySelector('.header__cross'),
        menuMob = document.querySelector('.mobile-menu'),
        logo = document.querySelector('.header__logo'),
        bodyM = document.querySelector('body'),
        titleMob = document.querySelector('.header__title'),
        subtitleMob = document.querySelector('.header__subtext');

    burger.addEventListener('click', (e) => {
        
        if (menuMob.classList.contains('mobile-menu__out')) {
            menuMob.classList.remove('mobile-menu__out');
        };    
        
        menuMob.classList.add('mobile-menu__in');
        logo.style.opacity = '0';
        titleMob.style.opacity = '0';
        subtitleMob.style.opacity = '0';
        bodyM.style.overflow = 'hidden';
    }); 

    cross.addEventListener('click', (e) => {

        menuMob.classList.remove('mobile-menu__in');
        menuMob.classList.add('mobile-menu__out');
        logo.style.opacity = '100';
        titleMob.style.opacity = '100';
        subtitleMob.style.opacity = '100';
        bodyM.style.overflow = 'scroll';
    });  



    //карточки


    let selected = false; // Тут будем хранить индекс первого выбранного элемента.

    document.querySelector('.offers__wrapper').addEventListener('click', e => { // Вешаем ивент на клик | делегирование
            
            const target = e.target.closest('.card'); // Получаем элемент для перемещения
            const star = e.target.closest('.card__comeback'); // Получаем элемент для выделения
            const heart = e.target.closest('.card__hearth'); // Получаем элемент для выделения сердечек

            if(star && target) { // Проверяем что такой есть - это для делегирования
    
            // Если нажат будет тот, который уже выделен, то мы снимем с него класс и отменим действие
                if(target.classList.contains('card--active')) {
                target.classList.remove('card--active');
                selected = false;
                return false;
                }
        
                // А тут основная логика
                if(selected === false) { // Если нет индекса первого выброного элемента
                selected = [...target.parentElement.children].indexOf(target); // получаем этот индекс и сразу записываем
                target.classList.add('card--active'); // Вешаем ему класс, чтобы выделить
                } else { // А тут будет действие для второго выделеного блока
                const parent = target.parentElement; // Получаем родителя
                const i = [...parent.children].indexOf(target); // Получаем индекс второго нажатого блока
                const childrens = parent.children; // Получаем все блоки
                
                const clones = [childrens[selected].cloneNode(true), childrens[i].cloneNode(true)]; 
                // Чтобы проще было поменять, мы клонируем наши выбранные элементы. Таким способом сохронятся даже повешанные на них ивенты.

                // Далее логика такая: заменяем А клоном Б, а Б клоном А.
                parent.replaceChild(clones[0], childrens[i]);
                parent.replaceChild(clones[1], childrens[selected]);
                childrens[i].classList.remove('card--active'); // Удаляем класс выделения
                // P.s. удаляем класс не у selected, а у i, потому что под этими индексами уже поменяные элементы.
                selected = false; // Указываем что "выбранный" - не выбран.
                }
            }

    //выделяем и снимаем выделение с сердечек

        if(heart && target) {
            // Если нажат будет тот, который уже выделен, то мы снимем с него класс и отменим действие
            if(target.classList.contains('card--active2')) {
                target.classList.remove('card--active2');
                selected = false;
                return false;
            } else {
                target.classList.add('card--active2');
            }
        }
    });  


    //Открыть второй блок карточек

    /* const button = document.querySelector('.button');
    const cardHidden = document.getElementById('2');
    

    button.addEventListener('click', (e) => {

        if (cardHidden.classList.contains('remove')) {
            cardHidden.classList.remove('remove');
            button.textContent = 'Load Less';
        } else {
            cardHidden.classList.add('remove');
            button.textContent = 'Load More';
        }
    }); */


    /* // Удаление лишнего текста в карточках в mobile-режиме

    const mQuery = window.matchMedia('(max-width: 568px)');

    mQuery.addEventListener('change', () => {
        let elements = document.querySelectorAll('.amount');
        for ( key of elements ) {
            const texts = (key.innerHTML);
            let reply = texts.replace(/Beds /gi,"");
            let reply2 = reply.replace(/Baths /gi,"");
            let reply3 = reply2.replace(/ Sqft/gi,"");
            (key.innerHTML) = reply3;

            const mMedia = window.matchMedia('(min-width: 568.5px)');

            mMedia.addEventListener('change', () => {
                window.location.reload();  
            }); 
        }
    }); */


    //Form - списки

    //Список 1


    const inquiryHeader = document.querySelector('.inquiry-type__header');
    const inquiryBody = document.querySelector('.inquiry-type__body');
    const inquiryItem = document.querySelectorAll('.inquiry-type__item');
    const inquiryTitle = document.querySelector('.inquiry-type__header-text');
    const inquiryImg = document.querySelector('.inquiry-type__header img');


    inquiryHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (inquiryBody.classList.contains('active')) {
            inquiryBody.classList.remove('active');
            inquiryImg.style.transform = 'rotate(0deg)';
            inquiryBody.style.maxHeight = null;
        }    else {
            inquiryBody.classList.add('active');
            inquiryImg.style.transform = 'rotate(180deg)';
            inquiryBody.style.maxHeight = inquiryBody.scrollHeight + 'px';
        };
        if (inquiryHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            inquiryHeader.lastElementChild.style.right = ('-90rem');
        }    
    });

    inquiryItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            inquiryTitle.value = item.textContent;
            inquiryBody.classList.remove('active');
            inquiryImg.style.transform = 'rotate(0deg)';
            inquiryBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== inquiryBody) {
            inquiryBody.classList.remove('active');
            inquiryImg.style.transform = 'rotate(0deg)';
            inquiryBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Список 2


    const userHeader = document.querySelector('.user__header');
    const userBody = document.querySelector('.user__body');
    const userItem = document.querySelectorAll('.user__item');
    const userTitle = document.querySelector('.user__text');
    const userImg = document.querySelector('.user__header img');


    userHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (userBody.classList.contains('active')) {
            userBody.classList.remove('active');
            userImg.style.transform = 'rotate(0deg)';
            userBody.style.maxHeight = null;
        }    else {
            userBody.classList.add('active');
            userImg.style.transform = 'rotate(180deg)';
            userBody.style.maxHeight = userBody.scrollHeight + 'px';
        };
        if (userHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            userHeader.lastElementChild.style.right = ('-90rem');
        }    
    });

    userItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            userTitle.value = item.textContent;
            userBody.classList.remove('active');
            userImg.style.transform = 'rotate(0deg)';
            userBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== userBody) {
            userBody.classList.remove('active');
            userImg.style.transform = 'rotate(0deg)';
            userBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Список 3


    const emailHeader = document.querySelector('.email__header');
    const emailBody = document.querySelector('.email__body');
    const emailItem = document.querySelectorAll('.email__item');
    const emailTitle = document.querySelector('.email__text');
    const emailImg = document.querySelector('.email__header img');


    emailHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (emailBody.classList.contains('active')) {
            emailBody.classList.remove('active');
            emailImg.style.transform = 'rotate(0deg)';
            emailBody.style.maxHeight = null;
        }    else {
            emailBody.classList.add('active');
            emailImg.style.transform = 'rotate(180deg)';
            emailBody.style.maxHeight = emailBody.scrollHeight + 'px';
        }    
    });

    emailItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            emailTitle.textContent = item.textContent;
            emailBody.classList.remove('active');
            emailImg.style.transform = 'rotate(0deg)';
            emailBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== emailBody) {
            emailBody.classList.remove('active');
            emailImg.style.transform = 'rotate(0deg)';
            emailBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Список 4


    const propertyHeader = document.querySelector('.property__header');
    const propertyBody = document.querySelector('.property__body');
    const propertyItem = document.querySelectorAll('.property__item');
    const propertyTitle = document.querySelector('.property__text');
    const propertyImg = document.querySelector('.property__header img');


    propertyHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (propertyBody.classList.contains('active')) {
            propertyBody.classList.remove('active');
            propertyImg.style.transform = 'rotate(0deg)';
            propertyBody.style.maxHeight = null;
        }    else {
            propertyBody.classList.add('active');
            propertyImg.style.transform = 'rotate(180deg)';
            propertyBody.style.maxHeight = propertyBody.scrollHeight + 'px';
        };
        if (propertyHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            propertyHeader.lastElementChild.style.right = ('-90rem');
        }      
    });

    propertyItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            propertyTitle.value = item.textContent;
            propertyBody.classList.remove('active');
            propertyImg.style.transform = 'rotate(0deg)';
            propertyBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== propertyBody) {
            propertyBody.classList.remove('active');
            propertyImg.style.transform = 'rotate(0deg)';
            propertyBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Маленький список 1


    const priceHeader = document.querySelector('.price__header');
    const priceBody = document.querySelector('.price__body');
    const priceItem = document.querySelectorAll('.price__item');
    const priceTitle = document.querySelector('.price__text');
    const priceImg = document.querySelector('.price__header img');


    priceHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (priceBody.classList.contains('active')) {
            priceBody.classList.remove('active');
            priceImg.style.transform = 'rotate(0deg)';
            priceBody.style.maxHeight = null;
        }    else {
            priceBody.classList.add('active');
            priceImg.style.transform = 'rotate(180deg)';
            priceBody.style.maxHeight = priceBody.scrollHeight + 'px';
        };
        if (priceHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            priceHeader.lastElementChild.style.right = ('-90rem');
        }    
    });

    priceItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            priceTitle.value = item.textContent;
            priceBody.classList.remove('active');
            priceImg.style.transform = 'rotate(0deg)';
            priceBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== priceBody) {
            priceBody.classList.remove('active');
            priceImg.style.transform = 'rotate(0deg)';
            priceBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Маленький список 2


    const sizeHeader = document.querySelector('.size__header');
    const sizeBody = document.querySelector('.size__body');
    const sizeItem = document.querySelectorAll('.size__item');
    const sizeTitle = document.querySelector('.size__text');
    const sizeImg = document.querySelector('.size__header img');


    sizeHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (sizeBody.classList.contains('active')) {
            sizeBody.classList.remove('active');
            sizeImg.style.transform = 'rotate(0deg)';
            sizeBody.style.maxHeight = null;
        }    else {
            sizeBody.classList.add('active');
            sizeImg.style.transform = 'rotate(180deg)';
            sizeBody.style.maxHeight = sizeBody.scrollHeight + 'px';
        };
        if (sizeHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            sizeHeader.lastElementChild.style.right = ('-90rem');
        }    
    });

    sizeItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            sizeTitle.value = item.textContent;
            sizeBody.classList.remove('active');
            sizeImg.style.transform = 'rotate(0deg)';
            sizeBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== sizeBody) {
            sizeBody.classList.remove('active');
            sizeImg.style.transform = 'rotate(0deg)';
            sizeBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Маленький список 3


    const bedsnumHeader = document.querySelector('.beds-num__header');
    const bedsnumBody = document.querySelector('.beds-num__body');
    const bedsnumItem = document.querySelectorAll('.beds-num__item');
    const bedsnumTitle = document.querySelector('.beds-num__text');
    const bedsnumImg = document.querySelector('.beds-num__header img');


    bedsnumHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (bedsnumBody.classList.contains('active')) {
            bedsnumBody.classList.remove('active');
            bedsnumImg.style.transform = 'rotate(0deg)';
            bedsnumBody.style.maxHeight = null;
        }    else {
            bedsnumBody.classList.add('active');
            bedsnumImg.style.transform = 'rotate(180deg)';
            bedsnumBody.style.maxHeight = bedsnumBody.scrollHeight + 'px';
        };
        if (bedsnumHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            bedsnumHeader.lastElementChild.style.right = ('-90rem');
        }    
    });

    bedsnumItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            bedsnumTitle.value = item.textContent;
            bedsnumBody.classList.remove('active');
            bedsnumImg.style.transform = 'rotate(0deg)';
            bedsnumBody.style.maxHeight = null;
        });
    });

    document.addEventListener('click', (e) => {
        if ( e.target !== bedsnumBody) {
            bedsnumBody.classList.remove('active');
            bedsnumImg.style.transform = 'rotate(0deg)';
            bedsnumBody.style.maxHeight = null;
        }
    }); // если клик вне списка



    //Маленький список 4


    const bathsnumHeader = document.querySelector('.baths-num__header');
    const bathsnumBody = document.querySelector('.baths-num__body');
    const bathsnumItem = document.querySelectorAll('.baths-num__item');
    const bathsnumTitle = document.querySelector('.baths-num__text');
    const bathsnumImg = document.querySelector('.baths-num__header img');


    bathsnumHeader.addEventListener('click', (e) => {
        e.stopPropagation(); //запрещает событию передаваться родительским элементам

        if (bathsnumBody.classList.contains('active')) {
            bathsnumBody.classList.remove('active');
            bathsnumImg.style.transform = 'rotate(0deg)';
            bathsnumBody.style.maxHeight = null;
        }    else {
            bathsnumBody.classList.add('active');
            bathsnumImg.style.transform = 'rotate(180deg)';
            bathsnumBody.style.maxHeight = bathsnumBody.scrollHeight + 'px';
        };
        if (bathsnumHeader.lastElementChild.classList.contains('just-validate-error-label')) {
            bathsnumHeader.lastElementChild.style.right = ('-90rem');
        }    
    });

    bathsnumItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            bathsnumTitle.value = item.textContent;
            bathsnumBody.classList.remove('active');
            bathsnumImg.style.transform = 'rotate(0deg)';
            bathsnumBody.style.maxHeight = null;
        });
    });

        document.addEventListener('click', (e) => {
            if ( e.target !== bathsnumBody) {
                bathsnumBody.classList.remove('active');
                bathsnumImg.style.transform = 'rotate(0deg)';
                bathsnumBody.style.maxHeight = null;
            }
        }); // если клик вне списка




    //iForm send + validation +++++++++++++++++++++++++++++++++

    const form = document.querySelector('.form');

    const emailSelector = form.querySelector('input[inputmode="email"]');
    const emailValid = new Inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
          pastedValue = pastedValue.toLowerCase();
          return pastedValue.replace("mailto:", "");
        },
        definitions: {
          '*': {
            validator: "[0-9A-Za-z_-]",
            //validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
            casing: "lower"
          }
        }
      });

      emailValid.mask(emailSelector);

    const validation = new JustValidate('.form');

    validation
         .addField('#inquiry-type', [{
            rule: 'required',
            errorMessage: 'Please select a inquiry type'
        }
        ])
        .addField('#user', [{
            rule: 'required',
            errorMessage: 'How can we call you?'
        }    
        ])
        .addField('#firstname', [{
            rule: 'minLength',
            value: 2,
            errorMessage: 'Less than two characters'
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'More than 30 characters'
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Please input your firstname'
        }
        ])
        .addField('#lastname', [{
            rule: 'minLength',
            value: 2,
            errorMessage: 'Less than two characters'
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'More than 30 characters'
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Please input your lastname'
        }
        ])
        .addField('#email', [{
            rule: 'required',
            value: true,
            errorMessage: 'Please input your e-mail'
        },
        {
            rule: 'function',
            validator: function () {
                const emailS = emailSelector.inputmask.unmaskedvalue();
                return emailS.length <=40 && emailS.length >6;
            },
            errorMessage: 'Please input correct e-mail'
        }
        ])
        .addField('#property', [{
                rule: 'required',
                errorMessage: 'Please choose your property type'
            }
        ])
        .addField('#price', [{
                rule: 'required',
                errorMessage: 'Please select of price range'
            }
        ])
        .addField('#size', [{
                rule: 'required',
                errorMessage: 'Choose a property size'
            }
        ])
        .addField('#beds-num', [{
                rule: 'required',
                errorMessage: 'Choose a beds number'
            }
        ]) 
        .addField('#baths-num', [{
                rule: 'required',
                errorMessage: 'Choose a baths number'
            }
        ])
        .onSuccess((e) => {
            const checkbox = (form.querySelector('#checkbox'));
            if (form.querySelector('#check').checked) {
                
                const sendForm = (data) => {
                    return fetch ('mail.php', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    }).then(res => res.json());
                };

                const dataForm = new FormData(e.target);
                const user = {};

                dataForm.forEach((val, key) => {
                user[key] = val;
                });
                sendForm(user).then(data => {
                    console.log('Письмо ушло');
                });

                e.target.reset();
            } else {
                form.querySelector('.checkbox__confirm').classList.add('active');
                checkbox.classList.add('checkbox__note--active');
                form.querySelector('#check').addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (form.querySelector('.checkbox__confirm').classList.contains('active')) {
                        form.querySelector('.checkbox__confirm').classList.remove('active');
                    };
                    if (checkbox.classList.contains('checkbox__note--active')) {
                        checkbox.classList.remove('checkbox__note--active');
                    }; 
                });
            }
        }); 


        //slider-1

        const swiper = new Swiper('.slider-1', {
            loop: true,
            slidesPerView: 'auto',
            freeMode: false,
            initialSlide: 5,
            loopedSlides: 4,
            spaceBetween: 18,
            centeredSlides: true,
            grabCursor: true,
            navigation: {
                nextEl: '.slider-1__btnnext',
                prevEl: '.slider-1__btnprev',
              },
            breakpoints: {
                10: {
                    slidesPerView: 1,
                    spaceBetween: 13,
                },
                568: {
                    slidesPerView: 'auto',
                    spaceBetween: 18,
                },
            }
        }); 

        //slider-2

        const swiper2 = new Swiper('.slider-2', {
            loop: true,
            slidesPerView: 'auto',
            freeMode: false,
            initialSlide: 1,
            loopedSlides: 4,
            spaceBetween: 18.5,
            centeredSlides: true,
            grabCursor: true,
            navigation: {
                nextEl: '.slider-2__btnnext',
                prevEl: '.slider-2__btnprev',
                },
            breakpoints: {
                10: {
                    slidesPerView: 1,
                }, 
                568: {
                    slidesPerView: 'auto',
                },
            }
        }); 

        //создал слайдер для навигации slider-2 на мобилах
        const swiper22 = new Swiper('.slider-2', {
            loop: true,
            slidesPerView: 'auto',
            freeMode: false,
            initialSlide: 1,
            loopedSlides: 4,
            spaceBetween: 18.5,
            centeredSlides: true,
            grabCursor: true,
            navigation: {
                nextEl: '.slider-2__circle',
                prevEl: null,
                },
        }); 

        swiper2.controller.control = swiper22;
        swiper22.controller.control = swiper2;

        //slider-3

        const swiper3 = new Swiper('.slider-3', {
            slidesPerView: 6,
            initialSlide: 0,
            spaceBetween: 19,
            grabCursor: true,
            direction: 'vertical',
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragClass: 'drag',
            },
        });  

        //slider-4

        const swiper4 = new Swiper('.slider-4', {
            slidesPerView: 6,
            initialSlide: 0,
            spaceBetween: 19,
            grabCursor: true,
            direction: 'vertical',
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragClass: 'drag',
            },
        });
        

        //удаление слайдеров в мобиле

        /* let sliderVal01 = document.querySelector('.slider-3');
        let sliderVal02 = document.querySelector('.slider-4');

        function killSliders() {
            if (window.innerWidth <= 568 && sliderVal01.dataset.mobile == 'false' && sliderVal02.dataset.mobile == 'false') {
                swiper3.destroy();
                swiper4.destroy();

                sliderVal01.dataset.mobile = 'true';
                sliderVal02.dataset.mobile = 'true';
            }
            if (window.innerWidth > 568) {

                sliderVal01.dataset.mobile = 'false';
                swiper3.init();
                sliderVal02.dataset.mobile = 'false';
                swiper4.init();
            }
        }

        killSliders();

        window.addEventListener('resize', () => {
            killSliders();
        }); */


});//начальная функция 