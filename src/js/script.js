'use strict';

const box = document.querySelector('#box');
const btns = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');  // hearts = wrapper.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');   // oneHeart = wrapper.querySelectorAll('.heart');


box.style.backgroundColor = 'grey';
box.style.cssText = 'background-color: blue; width: 200px; border-radius: 50%';

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); // СТАРЫЙ

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); // СТАРЫЙ

// circles[0].remove();
// wrapper.removeChild(hearts[0]); // СТАРЫЙ

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // СТАРЫЙ

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = '<h1>Hello World</h1>';

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>')
