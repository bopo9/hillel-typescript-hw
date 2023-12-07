function calculate(calculator, operation, a, b) {
    switch (operation) {
        case "add" /* calculatorOperationEnum.ADD */:
            return calculator.add(a, b);
        case "subtract" /* calculatorOperationEnum.SUBTRACT */:
            return calculator.subtract(a, b);
        case "multiply" /* calculatorOperationEnum.MULTIPLY */:
            return calculator.multiply(a, b);
        case "divide" /* calculatorOperationEnum.DIVIDE */:
            return calculator.divide(a, b);
        default:
            throw new Error('Unknown operation.');
    }
}
var calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return a / b; },
};
console.log(calculate(calculator, "add" /* calculatorOperationEnum.ADD */, 1, 2));
var libraryService = {
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
    getAuthorById: function (id) {
        var author = this.authorsRepository.find(function (author) { return author.id === id; });
        return author;
    },
    getBookById: function (id) {
        var book = this.booksRepository.find(function (book) { return book.id === id; });
        return book;
    },
    getAllAuthors: function () {
        return this.authorsRepository;
    },
    getAllBooks: function () {
        return this.booksRepository;
    },
    setAuthor: function (author) {
        this.authorsRepository.unshift(author);
        return this.authorsRepository;
    },
    setBook: function (book) {
        this.booksRepository.unshift(book);
        return this.booksRepository;
    },
};
console.log(libraryService.getAllBooks());
console.log(libraryService.getAllAuthors());
console.log(libraryService.getAuthorById('fab57b8b-3cc0-442d-be6c-8679b462eef9'));
console.log(libraryService.getBookById('a2de6b2b-c8eb-47dd-991d-6970d8e13938'));
