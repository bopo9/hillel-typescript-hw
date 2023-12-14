import {Circle, Rectangle, Square, Triangle} from "./classes";

const circle = new Circle('CircleShape', 'red', 30);
console.log(`Circle Area is: ${ circle.calculateArea() }`);

const rectangle = new Rectangle('RectangleShape', 'green', 30, 30);
rectangle.print();
console.log(`Rectangle Area is: ${ rectangle.calculateArea() }`);

const square = new Square('SquareShape', 'blue', 34);
square.print();
console.log(`Square Area is: ${ square.calculateArea() }`);

const triangle = new Triangle('TriangleShape', 'pink', 34, 10);
console.log(`Triangle Area is: ${ triangle.calculateArea() }`);