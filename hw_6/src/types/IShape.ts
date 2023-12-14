export interface IShape {
    readonly name: string;
    readonly color: string;

    calculateArea: () => number;
}