import {Direction, Area} from "./index";

export default class School {
    private _lecturers: Set<string> = new Set<string>();
    private _areas: Set<Area> = new Set<Area>();
    directions: Array<Direction> = [];

    get areas(): Array<Area> {
        return Array.from(this._areas);
    }

    get lecturers(): Array<string> {
        return Array.from(this._lecturers);
    }

    addLecturer(lecturer: string): void {
        this._lecturers.add(lecturer);
    }

    removeLecturer(lecturer: string): boolean {
        return this._lecturers.delete(lecturer);
    }

    addArea(area: Area): void {
        this._areas.add(area);
    }

    removeArea(area: Area): boolean {
        return this._areas.delete(area);
    }

    addDirection(direction: Direction) {
        this.directions.push(direction);
    }
}