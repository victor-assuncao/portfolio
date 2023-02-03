// import Swiper from '../node_modules/swiper/swiper';
// import Swiper from 'swiper';
import * as Swiper from 'swiper';
import { Data } from './data';
export class Cards {
    constructor() {
        this.skillSwiper();
    }
    skillSwiper() {
        const swiper = new Swiper.Swiper("[data-skill-cards]", {
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
        let data = new Data().dataSkills;
        console.log(data);
    }
    testimonySwiper() {
    }
}
