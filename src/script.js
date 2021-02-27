/* const timerId = setTimeout(function () {
    console.log('Hello');
}, 2000); */

const btn = document.querySelector('.btn');
let timerId = null;
let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {

        } else {
            pos += 1;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', myAnimation);

/* btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
});

function logger() {
    if (i === 3) {
        clearInterval(timerId);
    };

    console.log('text');
    i += 1;
};

let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */