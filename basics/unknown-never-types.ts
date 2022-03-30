let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Mario';

// userName = userInput;
if (typeof userInput === 'string') {
   userName = userInput;
}
// Is better to use unkown than any to force you to check the type first

// The never type
// A function that never returns a value
function generateError(message: string, code: number): never {
   throw { message, errorCode: code };
}

const result = generateError('An Error ocurred', 500);
console.log(result);