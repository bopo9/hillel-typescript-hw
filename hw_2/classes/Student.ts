export default class Student {
    private _grades: { [workName: string]: number }[] = [];
    private _visits: { [subject: string]: string }[] = [];
    private _birthYear: (string | number) = '';
    attendance: string[] = [];
    firstName: string = '';
    lastName: string = '';

    constructor(firstName: string, lastName: string, birthYear: (string | number)) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._birthYear = birthYear;
    }

    get age(): number {
        return new Date().getFullYear() - +this._birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    setGrade(workName: string, grade: number): void {
        this._grades.push({ [workName]: grade });
    }

    setVisit(subject: string, visit: string): void {
        this._visits.push({ [subject]: visit })
    }
    makeAttendance(present: string): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = this._grades.map(grade => Object.values(grade)[0]);

        if (gradeValues.length === 0) return 0;

        const averageGrade =
            gradeValues.reduce(
                (sum, grade) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage =
            (this.attendance.filter((present) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}