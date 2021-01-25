function progress(param, bara) {

    let width = 1;

    let id = setInterval(loadingBar, 40);

    function loadingBar() {
        if (width == param) {
            clearInterval(id);
        } else {
            width++;
            bara.style.width = width + '%';
        }
    }
}

const skills = document.getElementById('animatie');

let bara1 = document.getElementById('progress');
let bara2 = document.getElementById('progress2');
let bara3 = document.getElementById('progress3');

let clicked = 0;

skills.addEventListener('click', function() {

    if (clicked == 0) {
        progress(70, bara1);
        progress(40, bara2);
        progress(80, bara3);
        clicked = 1;
    }
})


let chestie = setInterval(checkPos, 60);

function checkPos() {
    let pozitie = window.pageYOffset;

    if (pozitie >= (document.getElementById('sec3').offsetTop - 0.1 * document.getElementById('sec3').offsetTop) && pozitie < document.getElementById('sec4').offsetTop) {
        if (clicked == 0) {
            progress(70, bara1);
            progress(40, bara2);
            progress(80, bara3);
            clicked = 1;
            clearInterval(chestie);
        }
    }
}

console.log(document.getElementById('sec4').offsetTop);


//efect text
function textRandom() {
    let text = ["What do you prefer? A π, or a 🥧?", "Code is poetry, isn't it? ¯\_(ツ)_/¯",
        "How long does a loop last? For a while (⌐■_■).", "What's the difference between a dentist and a web page? The doctype.",
        "What is dying programmer's last program? Goodbye world (ง •_•)ง.", "Who is Javascript's favourite singer? JSON Derulo ( ͡• ͜ʖ ͡• )."
    ];
    return text[Math.floor(Math.random() * 6)];
}

let text = textRandom();
const textHtml = document.getElementById('prima');
let i = 0;
let id = setInterval(efectScriere, 120);

function efectScriere() {
    textHtml.innerHTML = text.slice(0, i++);

    if (i == textHtml.lenght - 1) {
        clearInterval(id);
        return;

    }
}