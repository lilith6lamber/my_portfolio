'use strict';

import Typewriter from 'typewriter-effect/dist/core';

function initTypewriter() {
    const parent = document.querySelector('.first_screen-content_header');

    var typewriter = new Typewriter(parent, {
        delay: 50,
    });

    typewriter
        .pauseFor(1000)
        .typeString(`<h1 class="title">Hi! My name is <span class="highlight">Lilith Lamber</span>.</h1><br>`)
        .typeString(`<p class="subtitle">I am <span class="highlight">Junior Frontend Developer</span>.</p>`)
        .start();
}

export default initTypewriter;