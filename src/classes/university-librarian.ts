import { logger, sealed } from '../decorators';
import * as Interfaces from './../interfaces';

// @sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }
}