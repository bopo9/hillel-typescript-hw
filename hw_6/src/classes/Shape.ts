import { IShape } from "../types";

export default abstract class Shape implements IShape{
    constructor(public readonly name: string, public readonly color: string) {}

    abstract calculateArea(): number;
}