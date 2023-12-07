/**
 * CALCULATOR EXAMPLE
 */
interface ICalculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}
const enum calculatorOperationEnum {
    ADD = 'add',
    SUBTRACT = 'subtract',
    MULTIPLY = 'multiply',
    DIVIDE = 'divide',
}

function calculate(calculator: ICalculator, operation: calculatorOperationEnum, a: number, b: number): number {
    switch (operation) {
        case calculatorOperationEnum.ADD:
            return calculator.add(a, b);
        case calculatorOperationEnum.SUBTRACT:
            return calculator.subtract(a, b);
        case calculatorOperationEnum.MULTIPLY:
            return calculator.multiply(a, b);
        case calculatorOperationEnum.DIVIDE:
            return calculator.divide(a, b);
        default:
            throw new Error('Unknown operation.');
    }
}

const calculator: ICalculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

console.log(calculate(calculator, calculatorOperationEnum.ADD, 1, 2));


/**
 * BOOK EXAMPLE
 */
interface IBook {
    id: string;
    title: string;
    authorId: string;
}

interface IAuthor {
    id: string;
    name: string;
}

interface ILibraryService {
    booksRepository: IBook[],
    authorsRepository: IAuthor[],
    getBookById: (id: string) => IBook | undefined
    getAuthorById: (id: string) => IAuthor | undefined
    getAllBooks: () => IBook[]
    getAllAuthors: () => IAuthor[],
    setBook: (book: IBook) => IBook[],
    setAuthor: (author: IAuthor) => IAuthor[],
}

const libraryService: ILibraryService = {
    authorsRepository: [
        {
            id: 'fab57b8b-3cc0-442d-be6c-8679b462eef9',
            name: 'Robert Martin',
        },
        {
            id: '3b509b10-5fd4-4112-823e-e5a975170240',
            name: 'Kyle Simpson',
        },
    ],
    booksRepository: [
        {
            id: '1997e6a3-4cca-490b-bcd3-5b73a6c763ab',
            authorId: 'fab57b8b-3cc0-442d-be6c-8679b462eef9',
            title: 'Clean Code'
        },
        {
            id: 'fab57b8b-3cc0-442d-be6c-8679b462eef9',
            authorId: 'fab57b8b-3cc0-442d-be6c-8679b462eef9',
            title: 'Clean Architecture'
        },
        {
            id: 'a2de6b2b-c8eb-47dd-991d-6970d8e13938',
            authorId: '3b509b10-5fd4-4112-823e-e5a975170240',
            title: 'You Don`t know JavaScript'
        }
    ],
    getAuthorById: function (id: string) {
        const author =  this.authorsRepository.find((author: IAuthor) => author.id === id);

        return author;
    },
    getBookById: function (id: string) {
        const book =  this.booksRepository.find((book: IBook) => book.id === id);

        return book;
    },
    getAllAuthors: function () {
        return this.authorsRepository
    },
    getAllBooks: function () {
        return this.booksRepository
    },
    setAuthor: function (author: IAuthor) {
        this.authorsRepository.unshift(author);

        return this.authorsRepository;
    },
    setBook: function (book: IBook) {
        this.booksRepository.unshift(book);

        return this.booksRepository;
    },
}

console.log(libraryService.getAllBooks())
console.log(libraryService.getAllAuthors())
console.log(libraryService.getAuthorById('fab57b8b-3cc0-442d-be6c-8679b462eef9'))
console.log(libraryService.getBookById('a2de6b2b-c8eb-47dd-991d-6970d8e13938'))
