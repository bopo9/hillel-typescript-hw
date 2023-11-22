"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this.grades = {};
        this.attendance = [];
        this.firstName = '';
        this.lastName = '';
        this.birthYear = '';
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - +this.birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this.lastName, " ").concat(this.firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(" "), this.lastName = _a[0], this.firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (subject, grade) {
        this.grades[subject] = grade;
    };
    Student.prototype.makeAttendance = function (present) {
        this.attendance.push(present);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this.attendance.filter(function (present) { return present; }).length /
            this.attendance.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
exports.default = Student;
