'use strict';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setAvatarAnimation() {
    const imageSelector = '.first_screen-media_avatar';
    const outlineSelector = '.first_screen-media_outline';
    const circleSelector = '.first_screen-media';

    gsap.fromTo(circleSelector, { x: -1000 }, { x: 0, duration: 0.5 });
    gsap.fromTo(imageSelector, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });
    gsap.fromTo(outlineSelector, { opacity: 0, left: '50%', x: '-50%' }, { opacity: 1, left: '53%', duration: 0.5, delay: 1});
}

export function setContactAnimation() {
    const leftHandSelector = '.hand--left';
    const rightHandSelector = '.hand--right';
    const circleSelector = '.contact_header-circle';

    gsap.fromTo(circleSelector, { scale: 0 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { scrub: 0.2 }
    });

    gsap.fromTo(leftHandSelector, { x: -1000 }, {
        x: 0,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
    });

    gsap.fromTo(rightHandSelector, { x: 1000 }, {
        x: 0,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
    });
}

