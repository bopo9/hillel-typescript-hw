import {IShape} from "./";

export interface ISquare extends IShape{
    sideLength: number;

    print: () => void;
}