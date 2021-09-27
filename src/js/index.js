'use strict';

import initLoader from "./modules/loader";
import LazyLoad from "vanilla-lazyload";
import AOS from 'aos';
import { setAvatarAnimation, setContactAnimation } from "./modules/animation";
import initTypewriter from './modules/text';
import initProgressbar from "./modules/progress";
import { drawPortfolio } from './modules/data';


initLoader(500);

document.addEventListener('DOMContentLoaded', () => {
    const lazyload = new LazyLoad();
    AOS.init();
    setAvatarAnimation();
    initTypewriter();
    initProgressbar();
    drawPortfolio(lazyload);
/*     window.addEventListener('load', () => {
        setContactAnimation();
    }) */
});

window.addEventListener('load', () => {
    setContactAnimation();
})

