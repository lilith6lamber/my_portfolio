'use strict';

import ProgressBar from 'progressbar.js/dist/progressbar';


function initProgressbar() {
    const proggressBars = document.querySelectorAll('.progressLine');
    proggressBars.forEach(bar => {
        let id = bar.getAttribute('id');
        let value = bar.dataset.value;
        let limit = value / 100;

        let lineBar = new ProgressBar.Line(`#${id}`, {
            strokeWidth: 1,
            trailWidth: 1,
            from: { color: "#fcbf58" },
            to: { color: "#a37b39" },
            text: {
                value: '0',
                className: 'progress-text',
                style: {
                    color: 'white',
                    position: 'absolute',
                    top: '-30px',
                    right: '0',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },
            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.setText(`${value} %`);
            }
        });

        lineBar.animate(limit, {
            duration: 700
        });

    })

}

export default initProgressbar;
