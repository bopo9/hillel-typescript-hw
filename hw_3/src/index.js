var BadgeTypesEnum;
(function (BadgeTypesEnum) {
    BadgeTypesEnum["COLOR"] = "color";
    BadgeTypesEnum["MONO"] = "mono";
})(BadgeTypesEnum || (BadgeTypesEnum = {}));
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this.badgeTypeMap = new Map([
            ['single_fast', BadgeTypesEnum.COLOR],
            ['single_standard', BadgeTypesEnum.COLOR],
            ['double_fast', BadgeTypesEnum.MONO],
            ['double_standard', BadgeTypesEnum.MONO]
        ]);
        this._firstName = '';
        this._lastName = '';
        this._grades = [];
        this._visits = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
        // Опишите, как объект у которого есть поле lesson (любое имя) и present
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - +this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (grade) {
        this._grades.push(grade);
    };
    Student.prototype.setVisit = function (visit) {
        this._visits.push(visit);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = this._grades.map(function (grade) { return (grade.mark ? 1 : 0); });
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
