import {Student} from "./index";

export default class Group {
    private _students: Array<Student> = [];
    directionName: string = '';
    levelName: string = '';

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get students(): Array<Student> {
        return this._students;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    showPerformance(): Array<Student> {
        const sortedStudents: Array<Student> = this.students.slice().sort(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );

        return sortedStudents;
    }
}