import {Shape} from "./index";
import {ICircle} from "../types/";

export default class Circle extends Shape implements ICircle{
    constructor(name: string, color: string, public radius: number) {
        super(name, color);
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}