const enum BadgeSize {
	single = '4x3',
	double = '4x6'
}

const enum Print {
	standard = 'color',
	fast = 'zpl'
}

enum BadgeTypesEnum {
	COLOR = 'color',
	MONO = 'mono'
}

type BadgeSizeType = keyof typeof BadgeSize;
type PrintType = keyof typeof Print;

type BadgeSpec = `${BadgeSizeType}_${PrintType}`;

type BirthYearType = string | number;

type Grade = {
	workName: string;
	mark: boolean;
};

type Visit = {
	name: string;
	present: boolean;
};


class Student {
	badgeTypeMap = new Map<BadgeSpec,  BadgeTypesEnum>([
		['single_fast', BadgeTypesEnum.COLOR],
		['single_standard', BadgeTypesEnum.COLOR],
		['double_fast', BadgeTypesEnum.MONO],
		['double_standard', BadgeTypesEnum.MONO]
	]);

	private _firstName: string = '';
	private _lastName: string = '';
	private _birthYear: BirthYearType;
	private _grades: Grade[] = [];
	private _visits: Visit[] = [];

	// Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
	// Опишите, как объект у которого есть поле lesson (любое имя) и present

	get fullName(): string {
		return `${this._lastName} ${this._firstName}`;
	}
	
	set fullName(value) {
		[this._lastName, this._firstName] = value.split(' ');
	}

	get age(): number {
		return new Date().getFullYear() - +this._birthYear;
	}

	constructor(firstName: string, lastName: string, birthYear: BirthYearType) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._birthYear = birthYear;
	}

	setGrade(grade: Grade): void {
		this._grades.push(grade);
	}

	setVisit(visit: Visit): void {
		this._visits.push(visit);
	}

	getPerformanceRating(): number {
		const gradeValues = this._grades.map(grade => (grade.mark ? 1 : 0));

		if (!gradeValues.length) return 0;

		const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
		const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

		return (averageGrade + attendancePercentage) / 2;
	}
}