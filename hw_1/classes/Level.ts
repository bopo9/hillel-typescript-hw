import {Group} from "./index";

export default class Level {
    private _program: string = '';
    private _name: string = '';
    groups: Array<Group> = [];

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    addGroup(group: Group): void {
        this.groups.push(group);
    }
}