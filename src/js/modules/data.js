'use strict';

import initSlider from "./slider";

export async function drawPortfolio(lazyload) {
    const response = await fetch('data/data.json');
    if (response.ok) {
        const json = await response.json();
        const projects = json.projects;

        const target = document.querySelector('.portfolio_list');

        let html = '';

        for (let i = 0; i < projects.length; i++) {
            html += `
                <li class="portfolio_list-item">
                    <div class="portfolio_list-item_wrapper d-flex flex-column justify-content-between">
                        <div class="preview">
                            <picture>
                                <source 
                                    type="image/webp"
                                    data-srcset="img/preview/${projects[i].img}_preview--sm.webp 500w,
                                                    img/preview/${projects[i].img}_preview--full.webp 800w"
                                    srcset="img/preview/${projects[i].img}_preview--sm.webp 500w,
                                                    img/preview/${projects[i].img}_preview--full.webp 1200w"
                                    data-sizes="100w"
                                    sizes="100w"
                                    />
                                <img
                                    class="preview_img lazy"
                                    data-srcset="img/preview/${projects[i].img}_preview--sm.jpg 500w,
                                                    img/preview/${projects[i].img}_preview--full.jpg 800w"
                                    srcset="img/preview/${projects[i].img}_preview--sm.jpg 500w,
                                                    img/preview/${projects[i].img}_preview--full.jpg 1200w"
                                    data-src="img/preview/${projects[i].img}_preview--sm.jpg"
                                    src="img/preview/${projects[i].img}_preview--sm.jpg"
                                    alt="${projects[i].name}"
                                    data-sizes="100w"
                                    sizes="100w"
                                    />
                            </picture>
                        </div>
                        <div class="text-content d-flex flex-column justify-content-between">
                            <span class="date">${projects[i].date}</span>
                            <h3 class="title">${projects[i].name}</h3>
                            <p class="description">${projects[i].description}</p>`;

            if (projects[i].plugins.length != 0) {

                html += `
                                <h4 class="plugins-title">List of used plugins:</h4>
                                <ol class="plugins-list">
                    `;

                for (let j = 0; j < projects[i].plugins.length; j++) {
                    let plugin = projects[i].plugins[j];
                    

                    if (typeof plugin === 'string') {
                        html += `
                                                <li>${plugin}</li>
                                    `;

                    }
                    if (typeof plugin === 'object') {
                        for (let k in plugin) {
                            if (typeof plugin[k] === 'string') {
                                html += `
                                                <li>${plugin[k]}</li>
                                    `;
                            } else if (Array.isArray(plugin[k])) {
                                html += `
                                                <ul>
                                    `;
                                for (let a = 0; a < plugin[k].length; a++) {
                                    html += `
                                                <li class="addon">${plugin[k][a]}</li>
                                    `;
                                }
                                html += `
                                        </ul>
                                    </ol>
                                `;

                            }
                        }
                    }

                }
            } 
            html += `       </ol>
                            <div class="portfolio_external d-flex align-items-center justify-content-between">
                                <a class="link" href="${projects[i].page}" target="_blank" rel="noopener noreferrer">
                                    <i class="icon-web"></i>
                                    live
                                </a>
                                <a class="link" href="${projects[i].source}" target="_blank" rel="noopener noreferrer">
                                    <i class="icon-github"></i>
                                    source
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            `;
        }

        target.innerHTML = html;
        lazyload.update();
        initSlider({
            container: '.portfolio_list',
            controlsContainer: '.portfolio_list-controls',
            speed: 300,
            autoHeight: true,
            responsive: {
                576: {
                    gutter: 10,
                    items: 2
                },
                992: {
                    items: 3
                },
                1400: {
                    items: 4
                },
            }
        }, true);
    } else {
        console.log("HTTP Error: " + response.status);
    }
}
