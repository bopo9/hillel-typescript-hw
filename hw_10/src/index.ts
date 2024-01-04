// 1) Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

type DeepReadonly<T> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
};

// 2) Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

// 3) Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
};

// 4) Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: {
        value?: T[K];
        writable?: boolean;
        enumerable?: boolean;
        configurable?: boolean;
        get?(): T[K];
        set?(value: T[K]): void;
    };
};