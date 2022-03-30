var userInput;
var userName;
userInput = 5;
userInput = 'Mario';
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
// Is better to use unkown than any to force you to check the type first
// The never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An Error ocurred', 500);
console.log(result);
