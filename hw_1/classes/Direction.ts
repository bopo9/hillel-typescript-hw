import {Level} from "./index";
export default class Direction {
    readonly _name: string = '';
    levels: Array<Level> = [];

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    addLevel(level: Level): void {
        this.levels.push(level);
    }
}