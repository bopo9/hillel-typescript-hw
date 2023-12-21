/*
*  Example: 1
* */

function isString(value: unknown): value is string {
    return typeof value === 'string';
}

/*
*  Example: 2
* */

function checkArrayString(arr: Array<any>): Array<string> {
    return arr.filter(isString);
}

const array = [true, false, 1, 3, 'false', 'test', 'string?'];
console.log('Example: 1', checkArrayString(array));

/*
*  Example: 3
* */
interface IAbstractObject {
    [key: string]: unknown;
}

const user: IAbstractObject = {
    name: 'John',
    age: 25,
};

function getProperty(obj: IAbstractObject, property: string): unknown {
    return property in obj ? obj[property] : undefined;
}

console.log('Example: 2', getProperty(user, 'age'));

/*
*  Example: 4
* */
enum StatusEnum {
    ONLINE = "online",
    OFFLINE = "offline"
}

interface IUser {
    name: string;
    status: StatusEnum;
    stream: string,

    changeStatus(status: StatusEnum): void;
}

interface IWebRTC {
    stunIp: string;
    turnIp: string;

    connect(): void;

    close(): void;

    onConnect(): void;

    onClose(): void;
}

const isUser = (instance: any): instance is IUser => {
    return 'name' in instance;
};

const isWebRTC = (instance: any): instance is IWebRTC => {
    return 'connect' in instance && typeof instance['connect'] === 'function';
};

const makeConnection = (instance: IUser | IWebRTC): void => {
    if (isUser(instance)) {
        instance.changeStatus(StatusEnum.ONLINE)
    }

    if (isWebRTC(instance)) {
        instance.connect()
    }
}

const newUser: IUser = {
    name: 'Test',
    status: StatusEnum.OFFLINE,
    stream: 'stream',
    changeStatus: () => {
    },
};
const rtcInstance: IWebRTC = {
    stunIp: '',
    turnIp: '',
    connect: () => {
    },
    close: () => {
    },
    onConnect: () => {
    },
    onClose: () => {
    },
};
console.log('Example: 3 - isUser: ', isUser(rtcInstance));
console.log('Example: 3 - isWebRTC: ', isWebRTC(newUser));

/*
*  Example: 5
* */

const isNumber = (value: unknown): value is number => {
    return typeof value === 'number';
}

function validate(value: string | number): string | Error {
    if (isString(value) && !isNaN(Number(value))) {
        return Number(value).toFixed(2);
    }

    if (isNumber(value)) {
        return value.toFixed(2);
    }

    return new Error('Should be valid string or number')
}

console.log('Example: 4 - validate:', validate('2.5'))
console.log('Example: 4 - validate:', validate('25'))
console.log('Example: 4 - validate:', validate('{}')) // here will be Error -)
console.log('Example: 4 - validate:', validate(55))
console.log('Example: 4 - validate:', validate(55.5))
/*
*  Example: 6
* * Створіть захисник типу, який перевірятиме, чи є передане значення функцією.
* Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію,
* якщо вона існує
*
*  - I've done it in the block 'Example 4' and line is 69
* */


/*
*  Example: 7
* */
class Car {
    constructor(public manufacturer: string) {
    }
}

type CarTypes = "sedan" | "suv" | "hatchback";

class Toyota extends Car {
    constructor(
        manufacturer: string,
        public readonly carType: CarTypes
    ) {
        super(manufacturer);
    }
}

function isToyotaHatchback(car: Car): car is Toyota {
    return car instanceof Toyota && "carType" in car;
}

function showDetails(car: Car): void {
    if (isToyotaHatchback(car)) {
        console.log("manufacturer: ", car.manufacturer);
        console.log("carType: ",  car.carType);
    } else {
        console.log("manufacturer: ", car.manufacturer);
    }
}

const toyota = new Toyota('Toyota', 'hatchback'); // Crazy Yaris GR -)
showDetails(toyota);