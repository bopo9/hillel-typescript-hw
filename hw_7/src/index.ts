// 1) Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок

interface IUser {
    [key: string]: number | string;
}

// 2) Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.

interface IFuncIndex {
    [key: string]: (...args: unknown[]) => unknown;
}

// 3) Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.

interface ObjectArray {
    [key: number]: string;
}

//4) Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface CustomInterface {
    name: string;

    [key: string]: unknown;
}

//5) Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.

interface BaseInterface {
    [key: string]: number;
}

interface ExtendedInterface extends BaseInterface {
    additionalProperty: number;
}

//6) Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

interface ObjectWithIndexSignature {
    [key: string]: ValueType;
}

type ValueType = number | string;

function checkValues(obj: ObjectWithIndexSignature): boolean {
    return Object.values(obj).every((value: ValueType) => typeof value === 'number')
}