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
    //TODO: add more data
];

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(inputarray) {
    let array = [...inputarray];
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

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

let counter = 0;
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('index');
    let oldNode = ev.target.querySelector('p#content-aksara');
    let newNode = document.querySelector(
        `p#content-aksara[data-index="${data}"]`
    );
    let indexOfData = pilihan.aksara.indexOf(newNode.textContent);
    const statusAlert = document.querySelector('#status-alert');
    const buttonNext = document.querySelector('#button-next');
    if (ev.target.dataset.index == indexOfData) {
        counter++;
        if (counter == pilihan.latin.length) {
            buttonNext.classList.remove('hidden');
            buttonNext.classList.add('flex');
            animatePopUp(buttonNext, 'transform', 'scale(0.6)', 'scale(1)');
        }
        ev.target.removeChild(oldNode);
        ev.target.appendChild(newNode);
        statusAlert.classList.add('hidden');
        statusAlert.classList.remove('block');
    } else {
        buttonNext.classList.add('hidden');
        buttonNext.classList.remove('flex');
        statusAlert.classList.remove('hidden');
        statusAlert.classList.add('block');
        animatePopUp(statusAlert, 'transform', 'scale(0.6)', 'scale(1)');
    }
}
