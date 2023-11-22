"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this.directionName = '';
        this.levelName = '';
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this.students.slice().sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
exports.default = Group;
