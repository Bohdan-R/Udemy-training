'use strict';

/* function showThis(a, b) {
    console.log(this);  // undefined
    function sum() {
        console.log(this);  // undefined
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5); */

// 1) Обычная функция: this = window, но если use strict - undefined

/* const obj = {
    a: 20,
    b: 10,
    sum() {
        console.log(this);  // this - obj

        function shout() {
            console.log(this);  // undefined
        }
        shout();
    },
};

obj.sum(); */

// 2) Контекст у методов обьекта - сам обьект

/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello' + this.name);
    }
}
let vlad = new User('Vlad', 15); */

// 3) this в конструкторах и классах - это новый экземпляр обьекта

/* function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
};

const user = {
    name: 'Vlad',
};

sayName.call(user, 'Born');
sayName.apply(user, ['Born']);

function count(num) {
    return this * num;
};

const double = count.bind(2);
console.log(double(6));
console.log(double(20)); */

// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

/* btn.addEventListener('click', function () {
    console.log(this); // сам элемент <button>Click</button>
    this.style.backgroundColor = 'red';
}); */

btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red'; //  undefined
});

const obj = {
    num: 5,
    sayNumber() {
        const say = () => {
            console.log(this.num);
        }

        say();
    }
}

obj.sayNumber()