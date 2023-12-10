import {Shape} from "./index";

export default class Circle extends Shape{
    radius: number = 0;
    constructor(name: string, color: string, radius: number) {
        super(name, color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}