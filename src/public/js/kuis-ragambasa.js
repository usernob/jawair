import { debounce, shuffleArray } from './utils.js';

const template_input = document.getElementById('template-input');
const template_flex_input = document.getElementById('template-flex-input');
const box_container = document.getElementById('box-container');

let data = [
    ['mangan', 'nedha', 'dhahar'],
    ['turu', 'tilem', 'sare'],
    ['dalan', 'radinan', 'margi'],
    ['arep', 'ajeng', 'kersa'],
    ['suwe', 'dangu', 'dangu'],
    ['wadon', 'estri', 'estri'],
];

let shuffledData = shuffleArray(data);
let finalData = shuffledData.slice(0, 3);

const verifikasiInput = debounce((e) => {
    let input_target = e.target;
    let parent_index = parseInt(input_target.dataset.parentindex);
    let index = parseInt(input_target.dataset.index);

    if (input_target.value == '') {
        input_target.classList.remove('border-2');
        return;
    } else {
        input_target.classList.add('border-2');
    }

    if (shuffledData[parent_index][index] == input_target.value) {
        input_target.classList.remove('border-red-500');
        input_target.classList.add('border-green-500');
    } else {
        input_target.classList.remove('border-green-500');
        input_target.classList.add('border-red-500');
    }
});

finalData.forEach((item, parent_index) => {
    let clon = template_flex_input.content.cloneNode(true);
    let invicibleIndex = Math.floor(Math.random() * data[0].length);

    item.forEach((value, index) => {
        let input = template_input.content.cloneNode(true);
        if (index != invicibleIndex) {
            input.children[0].value = value;
            input.children[0].setAttribute('disabled', true);
        } else {
            input.children[0].value = '';
        }
        input.children[0].setAttribute('data-index', index);
        input.children[0].setAttribute('data-parentindex', parent_index);
        input.children[0].addEventListener('input', verifikasiInput);
        input.children[0].addEventListener('focusout', (e) => {
            if (e.target.classList.contains('border-green-500')) {
                e.target.classList.remove('border-2');
            }
        });

        clon.children[0].appendChild(input);
    });

    box_container.appendChild(clon);
});
