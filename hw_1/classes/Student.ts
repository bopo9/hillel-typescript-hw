export default class Student {
    grades: { [key: string]: number } = {};
    attendance: string[] = [];
    firstName: string = '';
    lastName: string = '';
    birthYear: (string | number) = '';

    constructor(firstName: string, lastName: string, birthYear: (string | number)) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get age(): number {
        return new Date().getFullYear() - +this.birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    makeAttendance(present: string): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade =
            gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage =
            (this.attendance.filter((present) => present).length /
                this.attendance.length) *
            100;
        
        return (averageGrade + attendancePercentage) / 2;
    }
}