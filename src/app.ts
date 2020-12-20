/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

/* Task 02 */
enum Category { JavaScript, CSS, HTML, TypeScript, Angular, React };

type DamageLogger2 = (reason: string) => void;
type BookProperties = keyof Book;

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Author extends Person {
    numBooksPublished: number;
}

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    let firstAvailableBook: object = books.find(book => book['available']);
    console.log(`First available book: ${firstAvailableBook['title']}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter(book => book['category'] === category)
        .map(book => book['title']);
}

function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index] as { title: string; author: string };
    return [title, author];
}

function calcTotalPages(): BigInt {
    const librariesData = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return librariesData.reduce((totalPages, library) => {
        return totalPages + BigInt(library.books) * BigInt(library.avgPagesPerBook);
    }, 0n);
}

/* Task 03.01 */
function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

type idGeneratorFunction = (name: string, id: number) => string;

const createCustomerIDArr = (name: string, id: number): string => `${id} - ${name}`;
const createCustomerIDArrWithType: idGeneratorFunction = (name: string, id: number): string => `${id} - ${name}`;

// const functionWithDefaultValues = (name: string = 'John Doe', age: number = 27): string => `${name} - ${age}`;
// console.log(functionWithDefaultValues());

function createCustomer(name: string, age: number = 27, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age) console.log(`Customer age: ${age}`);
    if (city) console.log(`Customer city: ${city}`);
}

function getBookByID(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find((book: { id: number }) => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);

    const titles: string[] = [];
    bookIDs.forEach(id => {
        const book = getBookByID(id);
        if (book?.available) titles.push(book.title);
    });

    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...params: (string | number | boolean)[]): string[] {
    const books = getAllBooks();
    let titles: string[];

    if (params.length === 1) {
        const [param] = params;
        if (typeof param === 'string') {
            titles = books
                .filter((book: any) => book.author === param)
                .map((book: any) => book.title);
        } else if (typeof param === 'boolean') {
            titles = books
                .filter((book: any) => book.available === param)
                .map((book: any) => book.title);
        }
    } else if (params.length === 2) {
        const [id, available] = params;
        if (typeof id === 'number' && typeof available === 'boolean') {
            titles = books
                .filter((book: any) => book.id === id && book.available === available)
                .map((book: any) => book.title);
        }
    }

    return titles;
}

/* Task 03.04 */
function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') throw new TypeError('value should have been a string');
}

function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`Book title ${book.title} by ${book.author}`);
}


function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop]['name'];
    }
    return book[prop];
}

/* Task 02 */
/*
logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);

console.log(getBookAuthorByIndex(0));

console.log(calcTotalPages());
*/

/* Task 03.01 */
/*
const myId: string = createCustomerID('Ann', 10);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('John Doe', 27));
*/

/* Task 03.02 */
/*
createCustomer('John Doe', 27, 'LA');
createCustomer('John Doe', undefined, 'NY');
createCustomer('John Doe', null, 'NA');

console.log(getBookTitlesByCategory());
logFirstAvailable();

console.log(getBookByID(1));
console.log(сheckoutBooks('Ann', 1, 2, 5));
*/
/* Task 03.03 */
/*
console.log(getTitles(1, true));
console.log(getTitles(2, true));
console.log(getTitles(true));
*/
/* Task 03.04 */
/*
console.log(bookTitleTransform('JavaScript'));
console.log(bookTitleTransform(123));
*/
/* Task 04.01 */
/*
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => `Damaged: ${reason}`
};
printBook(myBook);
console.log(myBook.markDamaged('missing back cover'));
*/
/* Task 04.02 */
/*
const logDamage: DamageLogger = (reason: string) => `Damaged: ${reason}`;
console.log(logDamage('missing back cover'));
*/

/* Task 04.03 */
/*
const favoriteAuthor: Author = {
    name: 'Ann',
    email: 'author@example.com',
    numBooksPublished: 10
};

const favoriteLibrarian: Librarian = {
    name: 'Ann',
    email: 'author@example.com',
    department: 'SciFi',
    assistCustomer: (custName: string) => console.log(custName)
};

console.log(favoriteAuthor);
console.log(favoriteLibrarian);
*/

/* Task 04.04 */
/*
const offer: any = {};
console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.getTitle?.());
*/

/* Task 04.05 */
/*
console.log(getBookProp(getAllBooks()[0], 'title'));
console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
console.log(getBookProp(getAllBooks()[0], 'isbn'));
*/