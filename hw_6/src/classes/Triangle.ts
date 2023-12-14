import {Shape} from "./index";
import { ITriangle } from "../types";
export default class Triangle extends Shape implements ITriangle{
    constructor(
        name: string,
        color: string,
        public base: number,
        public height: number
    ) {
        super(name, color);
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}