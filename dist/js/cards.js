import { Data } from './data.js';
export class Cards {
    constructor() {
        this.createSkillSwiper();
        this.createTesimonySwiper();
    }
    createSkillSwiper() {
        const swiper = new Swiper("[data-skill-cards]", {
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
        // Render cards
        const data = new Data().dataSkills;
        let html = "";
        data.forEach((element) => {
            const $template = $('[data-card-skill-template]').html();
            html += Mustache.render($template, element);
        });
        document.querySelector('[data-card-skill-container]').innerHTML = html;
    }
    createTesimonySwiper() {
        const swiper = new Swiper("[data-testimonies-swiper]", {
            slidesPerView: "auto",
            initialSlide: 0,
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
            breakpoints: {
                630: {
                    initialSlide: 1,
                },
            }
        });
        // Render cards
        const data = new Data().dataTestimonies;
        let html = "";
        data.forEach((element) => {
            const $template = $('[data-card-testimony-template]').html();
            html += Mustache.render($template, element);
        });
        document.querySelector('[data-testimonies-cards-container]').innerHTML = html;
    }
}
