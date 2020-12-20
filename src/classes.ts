/* eslint-disable no-underscore-dangle */
import * as Interfaces from './interfaces';

abstract class ReferenceItem {
    /*
    title: string;
    year: number;

    constructor(title: string, year: number) {
        console.log('Creating a new ReferenceItem...');

        this.title = title;
        this.year = year;
    }
    */

    static department: string = 'Classical Literature';

    #id: number;
    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(publisher: string) {
        this._publisher = publisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    getId(): number {
        return this.#id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Departament: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }
}

export { ReferenceItem, UniversityLibrarian };