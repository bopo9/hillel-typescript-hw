import {Shape} from "./index";
import {IRectangle} from "../types";

export default class Rectangle extends Shape implements IRectangle{
    constructor(name: string, color: string, public width: number, public height: number) {
        super(name, color);
    }
    
    print(): void {
        console.log(`Area = height * width`);
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}