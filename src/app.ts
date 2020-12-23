import { ReferenceItem, RefBook, Shelf, UniversityLibrarian } from './classes';
import { Category } from './enums';
import { createCustomer, getAllBooks, purge } from './functions';
import { Book, Logger, Magazine } from './interfaces';
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from './types';

import type { Library } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
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
const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
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

/* Task 05.01. Creating and Using Classes */
/*
const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2020);
console.log(ref);
ref.printItem();
ref.publisher = 'Some Publisher';
console.log(ref.publisher);
console.log(ref.getId());
*/

/* Task 05.02. Extending Classes */
/*
const refBook = new RefBook(1, 'TypeScript', 2020, 1);
refBook.printItem();
*/
/* Task 05.03. Creating Abstract Classes */
/*
const refBook = new Encyclopedia(1, 'TypeScript', 2020, 1);
refBook.printCitation();
*/

/* Task 05.04. Interfaces for Class Types */
/*
const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Ann';
favoriteLibrarian.assistCustomer('Boris');
*/

/* Task 05.05. Intersection and Union Types */
/*
const personBook: PersonBook = {
    name: 'Ann',
    email: 'ann@email.com',
    author: 'Boris',
    available: false,
    category: Category.Angular,
    id: 1,
    title: 'Intro',
    markDamaged: null,
    pages: 400
};
console.log(personBook);
*/
/* Task 06.05 */
/*
const flag = false;
if (!flag) {
    import('./classes')
        .then(module => {
            const reader = new module.Reader();
            reader.name = 'Ann';
            reader.take(getAllBooks()[3]);
            console.log(reader);
        });
}
*/
/* Task 06.06 */
// let lib: Library = new Library();
/*
let lib: Library = {
    Id: 1,
    name: 'Ann',
    address: 'LA'
};
console.log(lib);
*/
/* Task 07. Generics */
/*
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const result = purge<Book>(inventory);
console.log(result);

console.log(purge([1, 2, 3, 4]));
*/

/* Task 07.02 */
/*
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirt().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
console.log(magazineShelf.getFirt().title);
*/

/* Task 07.03 */
/*
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));
*/

/* Task 07.04. Utility Types */
/*
const obj: BookRequiredFields = {
    id: 1,
    author: 'Ann',
    available: false,
    category: Category.CSS,
    markDamaged: null,
    pages: 100,
    title: 'Unknown'

};

const updatedBook: UpdatedBook = {
    id: 2,
    author: 'John'
};

const params: Parameters<СreateCustomerFunctionType> = ['Ann', 30];
console.log(createCustomer(...params));
*/

/* 08.01, 08.02 */
/*
const obj = new UniversityLibrarian();
console.log(obj);
obj.name = 'Ann';
obj['printLibrarian']();
*/

/* 08.03. Method Decorator */
/*
const o = new UniversityLibrarian();
o.assistCustomer = null;
// o.teachCommunity = null;
console.log(o);
*/

/* 08.04. Method Decorator */
/*
const enc = new RefBook(1, 'No Title', 2020, 2);
enc.printItem();
*/

/* 08.05 - 08.06. Parameter  Decorator */
/*
const o = new UniversityLibrarian();
console.log(o);
o.name = 'Ann';
o.assistCustomer('Boris');
*/

/* Task 08.07. Accessor Decorator */
const enc = new RefBook(1, 'No Title', 2020, 2);
enc.copies = 10;
// enc.copies = -10;
