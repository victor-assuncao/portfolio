import { Data } from "./data.js";

window.addEventListener('scroll', () => {

    const header = document.querySelector('[data-header]');

    if (window.scrollY > 140) {

        return header.classList.add('header--fixed');
    }

    header.classList.remove('header--fixed');
})

function openAndCloseMenu() {

    const body = document.body;
    const nav = document.querySelector('[data-nav]');
    const navBackground = document.querySelector('[data-nav-background]');
    const logo = document.querySelector('[data-logo-menu]');
    const closeMenu = [
        document.querySelector('[data-close-menu]'),
        navBackground
    ]
    
    document.querySelector('[data-open-menu]').addEventListener('click', () => {
    
        body.classList.add('no-scroll');
        navBackground.classList.add('is-block');
        nav.classList.add('is-flex');
        logo.classList.add('is-block');

    })
    
    closeMenu.forEach(element => {

        element.addEventListener('click', () => {
    
            body.classList.remove('no-scroll');
            navBackground.classList.remove('is-block');
            nav.classList.remove('is-flex');
            logo.classList.remove('is-block');
        })
    })
};

// Render swipers
(() => {

    // Skills
    var swiper = new Swiper("[data-skill-cards]", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1110: {
                slidesPerView: 3,
            },

            760: {
                slidesPerView: 2,
            }, 
          }
    });

    let data = new Data().dataSkills

    for (let i = 0 ; i < data.length ; i++) {

        renderTemplate(
            document.querySelector('[data-card-skill-template]'),
            document.querySelector('[data-card-skill-container]'),
            data[i]
        )
    }

    // Testimonies
    var swiper = new Swiper("[data-testimonies-swiper]", {
        slidesPerView: "auto",
        initialSlide: 0, // Quando tiver mais de 2 depoimentos, trocar de 0 pra 1.
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true
        },
        navigation: {
            nextEl: "[data-testimonies-next]",
            prevEl: "[data-testimonies-prev]",
        },
      });

    data = new Data().dataTestimonies;

    for (let i = 0 ; i < data.length ; i++) {
        
        renderTemplate(
            document.querySelector('[data-card-testimony-template]'),
            document.querySelector('[data-testimonies-cards-container]'),
            data[i]
        );
    }
})();

(() => {

    const sections = [
        'home',
        'skills',
        'testimonies',
        'portfolio',
        'contact'
    ]
    
    for (let i = 0 ; i < 5 ; i++) {
    
        const section = $('[data-section-' + sections[i] + ']');
        const sectionLinks = $('[data-link-' + sections[i] + ']');
        
        sectionLinks.on('click', () => {

            let DistanceOfTop = section.offset().top - 100; // 100px é o tamanho do header
            
            if (i === 0) {

                DistanceOfTop = section.offset().top - 200;
            }

    
            window.scrollTo({top: DistanceOfTop, behavior: 'smooth'});
        })
    };
})();

function renderTemplate(template, container, data, isInner) {
    
    const html = Mustache.render($(template).html(), data);

    if (isInner) {

        return container.innerHTML = html;
    }

    $(container).append(html);
}

openAndCloseMenu()
