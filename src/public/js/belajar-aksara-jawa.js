//ref https://id.wikipedia.org/wiki/Aksara_Jawa
const aksara = {
    wyanjana: [
        //suara, aksara, pasangan
        ['ha', 'ꦲ', '꧀ꦲ'],
        ['na', 'ꦤ', '꧀ꦤ'],
        ['ca', 'ꦕ', '꧀ꦕ'],
        ['ra', 'ꦫ', '꧀ꦫ'],
        ['ka', 'ꦏ', '꧀ꦏ'],
        ['da', 'ꦢ', '꧀ꦢ'],
        ['ta', 'ꦠ', '꧀ꦠ'],
        ['sa', 'ꦱ', '꧀ꦱ'],
        ['wa', 'ꦮ', '꧀ꦮ'],
        ['la', 'ꦭ', '꧀ꦭ'],
        ['pa', 'ꦥ', '꧀ꦥ'],
        ['dha', 'ꦝ', '꧀ꦝ'],
        ['ja', 'ꦗ', '꧀ꦗ'],
        ['ya', 'ꦪ', '꧀ꦪ'],
        ['nya', 'ꦚ', '꧀ꦚ'],
        ['ma', 'ꦩ', '꧀ꦩ'],
        ['ga', 'ꦒ', '꧀ꦒ'],
        ['ba', 'ꦧ', '꧀ꦧ'],
        ['tha', 'ꦛ', '꧀ꦛ'],
        ['nga', 'ꦔ', '꧀ꦔ'],
    ],
    swara: [
        ['a', 'ꦄ'],
        ['i', 'ꦆ'],
        ['u', 'ꦈ'],
        ['e', 'ꦌ'],
        ['o', 'ꦎ'],
    ],
    angka: ['꧐', '꧑', '꧒', '꧓', '꧔', '꧕', '꧖', '꧗', '꧘', '꧙'],
};

const sandhangan = {
    //suara, bentuk aksara, nama
    swara: [
        ['i', 'ꦶ', 'wulu'],
        ['e', 'ꦼ', 'pepet'],
        ['u', 'ꦸ', 'suku'],
        ['é', 'ꦺ', 'taling'],
        ['o', 'ꦺꦴ', 'taling tarung'],
    ],
    panyigegwanda: [
        ['-ng', 'ꦁ', 'cecak'],
        ['-h', 'ꦃ', 'wigyan'],
        ['-r', 'ꦂ', 'layar'],
        ['menghilangkan vokal semua aksara', '꧀', 'pangkon'],
    ],
    wyanjaya: [
        ['-re-', 'ꦽ', 'keret'],
        ['-y-', 'ꦾ', 'pengkal'],
        ['-r-', 'ꦿ', 'cakra'],
        ['-l-', '꧀ꦭ', 'panjingan la'],
        ['-w-', '꧀ꦮ', 'gembung'],
    ],
};

const createBox = (title, content) => {
    const div = document.createElement('div');
    div.classList.add(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'gap-2',
        'py-2'
    );
    const aksara = document.createElement('h2');
    aksara.classList.add('text-aksara-header');
    const suara = document.createElement('p');
    aksara.innerText = title;
    suara.innerText = content;
    div.appendChild(aksara);
    div.appendChild(suara);
    return div;
};

const wyanjana = document.querySelector('#wyanjana');
aksara.wyanjana.forEach((val) => {
    let div = createBox(val[1], val[0]);
    wyanjana.appendChild(div);
});

const swara = document.querySelector('#swara');
aksara.swara.forEach((val) => {
    let div = createBox(val[1], val[0]);
    div.classList.replace('flex-col', 'flex-col-reverse');
    swara.appendChild(div);
});

const angka = document.querySelector('#angka');
aksara.angka.forEach((val, index) => {
    let div = createBox(val, index);
    div.classList.replace('flex-col', 'flex-col-reverse');
    angka.appendChild(div);
});

for (const [key, val] of Object.entries(sandhangan)) {
    let template = document.querySelector('template');
    let clone = template.content.cloneNode(true);
    clone.querySelector('#jenis').innerText = key;
    val.forEach((swara) => {
        let tr = document.createElement('tr');
        swara.forEach((val, index) => {
            let td = document.createElement('td');
            td.classList.add(
                'font-aksarajawa',
                index == 1 ? 'header2' : 'text-body',
                'border',
                'border-primary-4',
                'text-center',
                'py-4',
                'px-4'
            );
            td.innerText = val;
            tr.appendChild(td);
        });
        clone.querySelector('#sandhangan-swara').appendChild(tr);
    });
    document.querySelector('#sandhangan').appendChild(clone);
}
