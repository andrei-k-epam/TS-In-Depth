export namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            console.log(maxBooksAllowed(1));
            return daysLate * 0.25;
        }
    }

    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }
}