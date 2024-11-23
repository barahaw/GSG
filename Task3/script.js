const removeDuplicates = (strings) => {
  const uniqueSet = new Set(strings);
  return [...uniqueSet];
};

// Example usage
const strings = [
  "baraa",
  "salem",
  "barchlona",
  "rami",
  "messi",
  "messi",
  "R9",
  "orange",
  "R9",
  "isssa",
];
const uniqueStrings = removeDuplicates(strings);

console.log(uniqueStrings);
