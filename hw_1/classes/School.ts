import {Direction} from "./index";

export default class School {
    directions: Array<Direction> = [];

    addDirection(direction: Direction) {
        this.directions.push(direction);
    }
}