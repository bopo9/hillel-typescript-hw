export default class Shape {
    readonly name: string;
    readonly color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    calculateArea(): number {
        return 0;
    }
}