import {Shape} from "./index";

export default class Rectangle extends Shape{
    width: number = 0;
    height: number = 0;
    constructor(name: string, color: string, width: number,height: number) {
        super(name, color);
        this.width = width;
        this.height = height;
    }
    
    static print(): void {
        console.log(`Area = height * width`);
    }

    override calculateArea(): number {
        return this.width * this.height;
    }
}