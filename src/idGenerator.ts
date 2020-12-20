type idGeneratorFunction = (name: string, id: number) => string;

const createCustomerIDArr = (name: string, id: number): string => `${id} - ${name}`;
const createCustomerIDArrWithType: idGeneratorFunction = (name: string, id: number): string => `${id} - ${name}`;

// const functionWithDefaultValues = (name: string = 'John Doe', age: number = 27): string => `${name} - ${age}`;
// console.log(functionWithDefaultValues());