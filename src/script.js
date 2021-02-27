/* const btnRef = document.querySelector('button'); */
const overlayRef = document.querySelector('.overlay');

/* btn.onclick = function () {
    alert('click');
};

btn.onclick = function () {
    alert('second click');
} */

/* let i = 0; */

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    /* i += 1;

    if (i === 1) {
        btnRef.removeEventListener('click', deleteElement);
    } */
};

/* btnRef.addEventListener('click', deleteElement);
overlayRef.addEventListener('click', deleteElement); */

const linkRef = document.querySelector('a');

linkRef.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
})

const btnsRef = document.querySelectorAll('button');

btnsRef.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true})
})
