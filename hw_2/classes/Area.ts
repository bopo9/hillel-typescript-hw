import {Level} from "./index";

export default class Area {
    private _levels: Array<Level> = [];
    private _name: string = '';


    constructor(name: string) {
        this._name = name;
    }

    get levels(): Array<Level> {
        return this._levels;
    }

    get name(): string {
        return this._name;
    }

    addLevel(level: Level): void {
        this._levels.push(level)
    }

    removeLevel(level: Level): Array<Level> | [] {
        const idx: number = this._levels.findIndex((innerLevel: Level) => {
            return innerLevel.name === level.name;
        })

        return this._levels.splice(idx, 1);
    }
}