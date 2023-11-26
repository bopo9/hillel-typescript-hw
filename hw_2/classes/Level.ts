import {Group} from "./index";

export default class Level {
    private _program: string = '';
    private _name: string = '';
    private _description: string = '';
    private _groups: Array<Group> = [];

    constructor(name: string, program: string, description: string) {
        this._name = name;
        this._program = program;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    get groups(): Array<Group> {
        return this._groups;
    }

    addGroup(group: Group): void {
        this.groups.push(group);
    }

    removeGroup(group: Group): Array<Group> | [] {
        const idx: number = this._groups.findIndex((innerGroup) => {
            return innerGroup.levelName === group.levelName;
        });

        return this._groups.splice(idx);
    }
}