const obj = {
    a: 5,
    b: 1,
}

/* const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
    let objCopy = {};

    for (const key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
}

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone); */

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdsa';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejornal', 'blogs'];
const internet = [...video, ...blogs, 'vk'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 6];

log(...num);