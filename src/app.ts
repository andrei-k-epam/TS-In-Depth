showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

/* Task 02.01 */
enum Category { JavaScript, CSS, HTML, TypeScript, Angular, React };

function getAllBooks(): object[] {
    const books: object[] = [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

function logFirstAvailable(books: object[]): void {
    console.log(`Number of books: ${books.length}`);

    let firstAvailableBook: object = books.find(book => book['available']);
    console.log(`First available book: ${firstAvailableBook['title']}`);
}

function getBookTitlesByCategory(category: Category): string[] {
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
    const librariesData = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return librariesData.reduce((totalPages, library) => {
        return totalPages + BigInt(library.books) * BigInt(library.avgPagesPerBook);
    }, 0n);
}

/* Task 02.01 */
/*
logFirstAvailable(getAllBooks());

const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);

console.log(getBookAuthorByIndex(0));

console.log(calcTotalPages());
*/