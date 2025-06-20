function factorial(n) {
    if (n < 0) return 1; 
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
}

const num = Number(process.argv[2]); 
console.log(factorial(isNaN(num) ? 1 : num)); 
