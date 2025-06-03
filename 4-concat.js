const args = process.argv.slice(2); 
console.log(`${args[0] ? args[0] : 'undefined'} is ${args[1] ? args[1] : 'undefined'}`);
