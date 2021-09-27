'use strict';

import { tns } from "tiny-slider/src/tiny-slider";

function initSlider(settings, callback) {
    const sliderDefaults = {
        mode: 'carousel',
        items: 1,
        nav: false,
        loop: false,
    };
    let slider = tns({
        ...sliderDefaults,
        ...settings
    });
    if (callback) {
        slider.updateSliderHeight();
    }
}

export default initSlider;