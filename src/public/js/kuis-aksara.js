import { shuffleArray } from './utils.js';
const box = document.getElementById('box');
const aksara = document.getElementById('aksara');

let data = [
    {
        latin: ['Ha', 'Ri', 'Ma', 'U'],
        aksara: ['ꦲ', 'ꦫꦶ', 'ꦩ', 'ꦈ'],
    },
    {
        latin: ['O', 'Rang', 'Ka', 'Ya'],
        aksara: ['ꦎ', 'ꦫꦁ', 'ꦏ', 'ꦪ'],
    },
    {
        latin: ['Ma', 'Kan', 'Ba', 'Tu'],
        aksara: ['ꦩ', 'ꦏ', 'ꦤ꧀ꦧ', 'ꦠꦸ'],
    },
];

let pilihan = data[Math.floor(Math.random() * data.length)];
let templateBox = document.getElementById('template-box');

let suffledAksara = shuffleArray(pilihan.aksara);

suffledAksara.forEach((item, index) => {
    let clon = templateBox.content.cloneNode(true);
    let content_aksara = clon.querySelector('#content-aksara');

    content_aksara.innerText = item;
    content_aksara.setAttribute('data-index', index);
    content_aksara.addEventListener('dragstart', drag);
    content_aksara.setAttribute('draggable', true);
    aksara.appendChild(clon);
});

pilihan.latin.forEach((item, index) => {
    let clon = templateBox.content.cloneNode(true);
    let box_area = clon.querySelector('#box-area');

    clon.querySelector('#content-text').textContent = item;
    box_area.setAttribute('data-index', index);

    box_area.addEventListener('dragover', allowDrop);
    box_area.addEventListener('drop', drop);

    box.appendChild(clon);
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('index', ev.target.dataset.index);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('index');
    let oldNode = ev.target.querySelector('p#content-aksara');
    let newNode = document.querySelector(
        `p#content-aksara[data-index="${data}"]`
    );
    let indexOfData = pilihan.aksara.indexOf(newNode.textContent);
    let status_alert = document.querySelector('p#status-alert');
    if (ev.target.dataset.index == indexOfData) {
        ev.target.removeChild(oldNode);
        ev.target.appendChild(newNode);
        status_alert.textContent = '';
    } else {
        status_alert.textContent = 'Oops! pilihanmu salah';
    }
}
