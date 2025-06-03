const args = process.argv.slice(2);
const num = Number(args[0]); 
console.log(!isNaN(num) && Number.isInteger(num) ? `My number: ${num}` : "Not a number");
