import { timeout } from '../decorators';

/* eslint-disable no-underscore-dangle */
export abstract class ReferenceItem {
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

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Departament: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}