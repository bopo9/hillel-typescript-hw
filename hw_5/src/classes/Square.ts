import {Shape} from "./index";

export default class Square extends Shape{
    sideLength: number = 0;
    constructor(name: string, color: string, sideLength: number) {
        super(name, color);
        this.sideLength = sideLength;
    }

    static print(): void {
        console.log(`Area = side * side`);
    }

    override calculateArea(): number {
        return this.sideLength * this.sideLength;
    }
}