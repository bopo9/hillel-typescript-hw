import {Area, Student} from "./index";
import {Statuses} from "../enums/Statuses";

export default class Group {
    private _students: Student[] = [];
    private _area: Array<Area> = [];
    private _status: Statuses = Statuses.NOT_STARTED;
    directionName: string = '';
    levelName: string = '';

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get students(): Array<Student> {
        return this._students;
    }

    get areas(): Array<Area> {
        return this._area;
    }

    get status(): Statuses {
        return this._status;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    addStatus(status: Statuses): void {
        this._status = status;
    }

    removeStudent(student: Student): Array<Student> | [] {
        const idx: number = this._students.findIndex((innerStudent) => {
            return innerStudent.firstName === student.firstName;
        });

        return this._students.splice(idx, 1);
    }

    showPerformance(): Array<Student> {
        const sortedStudents = this._students.slice().sort(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );

        return sortedStudents;
    }
}