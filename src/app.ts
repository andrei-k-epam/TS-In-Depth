import { ReferenceItem, RefBook } from './classes';
import { Category } from './enums';
import { Logger } from './interfaces';
import { PersonBook } from './types';

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
const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
console.log(logDamage('missing back cover'));

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
const refBook = new RefBook(1, 'TypeScript', 2020, 1);
refBook.printItem();

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