const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

// Example usage:
const testEmail1 = "example@domain.com";
const testEmail2 = "invalid-email@.com";

console.log(isValidEmail(testEmail1));
console.log(isValidEmail(testEmail2));
