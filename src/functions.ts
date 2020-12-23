/* eslint-disable no-redeclare */
import { Category } from './enums';
import { Book, LibMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    let firstAvailableBook: object = books.find(book => book['available']);
    console.log(`First available book: ${firstAvailableBook['title']}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter(book => book['category'] === category)
        .map(book => book['title']);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index] as { title: string; author: string };
    return [title, author];
}

export function calcTotalPages(): BigInt {
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
export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age: number = 27, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age) console.log(`Customer age: ${age}`);
    if (city) console.log(`Customer city: ${city}`);
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find((book: { id: number }) => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);

    const titles: string[] = [];
    bookIDs.forEach(id => {
        const book = getBookByID(id);
        if (book?.available) titles.push(book.title);
    });

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...params: (string | number | boolean)[]): string[] {
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
export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') throw new TypeError('value should have been a string');
}

export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`Book title ${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop]['name'];
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T) {

    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const bookTitlesByCategories: string[] = getBookTitlesByCategory(category);
            if (bookTitlesByCategories.length) {
                callback(null, bookTitlesByCategories);
            } else {
                throw new Error('No books found.');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2_000);
}

export function logCategorySearch(err: Error, titles: string[]) {
    console.log((titles) ? titles : err.message);
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bookTitlesByCategories: string[] = getBookTitlesByCategory(category);
            if (bookTitlesByCategories.length) {
                resolve(bookTitlesByCategories);
            } else {
                reject('No books found.');
            }
        }, 2_000);
    });
}