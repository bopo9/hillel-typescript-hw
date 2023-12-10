"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var circle = new classes_1.Circle('CircleShape', 'red', 30);
console.log("Circle Area is: ".concat(circle.calculateArea()));
classes_1.Rectangle.print();
var rectangle = new classes_1.Rectangle('RectangleShape', 'green', 30, 30);
console.log("Rectangle Area is: ".concat(rectangle.calculateArea()));
classes_1.Square.print();
var square = new classes_1.Square('SquareShape', 'blue', 34);
console.log("Square Area is: ".concat(square.calculateArea()));
var triangle = new classes_1.Triangle('TriangleShape', 'pink', 34, 10);
console.log("Triangle Area is: ".concat(triangle.calculateArea()));