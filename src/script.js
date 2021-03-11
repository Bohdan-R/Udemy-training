'use strict';

const boxRef = document.querySelector('.box');
const btnRef = document.querySelector('button');

/* const width = boxRef.clientWidth;
const height = boxRef.clientHeight; */

/* const width = boxRef.offsetWidth;
const height = boxRef.offsetHeight; */

const width = boxRef.scrollWidth;
const height = boxRef.scrollHeight;

console.log(width, height);

btnRef.addEventListener('click', () => {
/* boxRef.style.height = `${boxRef.scrollHeight}px`; */
    console.log(boxRef.scrollTop);
});

console.log(boxRef.getBoundingClientRect().top);

const style = window.getComputedStyle(boxRef);

console.log(style.display);

console.log(document.documentElement.scrollTop);