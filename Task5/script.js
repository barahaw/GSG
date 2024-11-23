var isValidEmail = function (email) { return /\S+@\S+\.\S+/.test(email); };
// Example usage:
var testEmail1 = "example@domain.com";
var testEmail2 = "invalid-email@.com";
console.log(isValidEmail(testEmail1));
console.log(isValidEmail(testEmail2));
