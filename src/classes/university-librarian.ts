import { logger, logMethod, logParameter, sealed, writable, format } from '../decorators';
import * as Interfaces from './../interfaces';

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    // @logMethod
    // assistCustomer(@logParameter customerName: string): void {
    assistCustomer(customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}