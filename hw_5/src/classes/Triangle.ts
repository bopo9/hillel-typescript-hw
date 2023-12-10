import {Shape} from "./index";
export default class Triangle extends Shape{
    base: number = 0;
    height: number = 0;
    constructor(name: string, color: string, base: number, height: number) {
        super(name, color);
        this.base = base;
        this.height = height;
    }

    override calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}