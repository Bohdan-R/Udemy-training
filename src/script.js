'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
};

User.prototype.exit = function () {
    console.log(`User ${this.name} exit`);
}

const bohdan = new User('Bohdan', 25);
const vlad = new User('Vlad', 20);

vlad.exit();

bohdan.hello();
vlad.hello();

console.log(bohdan);
console.log(vlad);