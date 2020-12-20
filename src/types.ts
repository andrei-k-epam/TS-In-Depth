import { Book, Person } from './interfaces';

type DamageLogger2 = (reason: string) => void;
export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;