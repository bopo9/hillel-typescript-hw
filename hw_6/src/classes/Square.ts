import {Shape} from "./index";
import {ISquare} from "../types";

export default class Square extends Shape implements ISquare{
    constructor(name: string, color: string, public sideLength: number) {
        super(name, color);
    }

    print(): void {
        console.log(`Area = side * side`);
    }

    calculateArea(): number {
        return this.sideLength * this.sideLength;
    }
}