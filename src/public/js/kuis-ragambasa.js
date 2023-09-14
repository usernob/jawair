let data = [
    [
        'Dimas muleh kerjo jam sewelas bengi',
        'Adik wes madhang opo urung',
        'Aku mung bisa nginep sawengi',
    ],
    [
        'Bambang wis kondur sekolah',
        'Ndhuk, sliramu mengko kondur arep nitih apa?',
    ],
    [
        'Kula badhe nyambut garisan gadhahan sampeyan',
        'Mas Agus, wau nembe digoleki ibuk',
    ],
    [
        'Simbah badhe tindak dhateng Surabaya nitih kreta',
        'Kula mboten mangertos ingkang dipunngendikaken Pak Romi',
    ],
];

function getRandomVal(max) {
    return Math.floor(Math.random() * max);
}

const jenisRagamBasaIndex = getRandomVal(data.length);
console.log(jenisRagamBasaIndex);

const pilihan =
    data[jenisRagamBasaIndex][getRandomVal(data[jenisRagamBasaIndex].length)];

const soal = document.querySelector('#soal');
const button = document.querySelectorAll('button#button-pilihan');
const statusAlert = document.querySelector('#status-alert');
const buttonNext = document.querySelector('#button-next');

button.forEach((item) => {
    item.addEventListener('click', (e) => {
        verifySelected(e.target.dataset.value);
    });
});

soal.innerText = pilihan;

function verifySelected(value) {
    if (parseInt(value) == jenisRagamBasaIndex) {
        buttonNext.classList.remove('hidden');
        buttonNext.classList.add('flex');
        statusAlert.classList.add('hidden');
        statusAlert.classList.remove('block');
    } else {
        buttonNext.classList.add('hidden');
        buttonNext.classList.remove('flex');
        statusAlert.classList.remove('hidden');
        statusAlert.classList.add('block');
    }
}
