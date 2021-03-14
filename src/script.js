'use strict';

class Rectangle {
    constructor(heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }

    calcArea() {
        return this.heigth * this.width
    }
};

class ColoredRectangleWithText extends Rectangle {
    constructor(heigth, width, text, bgColor) {
        super(heigth, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showmyProps() {
        console.log(`Текс: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(15, 25, 'Hello', 'red');

div.showmyProps();
console.log(div.calcArea());

/* const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(long.calcArea());
console.log(square.calcArea()); */