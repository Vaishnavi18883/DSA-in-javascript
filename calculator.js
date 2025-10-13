let prompt = require('prompt-sync')();
let a = Number(prompt("Enter first number :"));
let b = Number(prompt("Enter second number :"));
console.log("adition is",a+b);
console.log("subtraction is",a-b);
console.log("multiplication is",a*b);
if (b!==0) {
    console.log("Divison is",a/b);
    
    
} else {
    console.log("division is not possible");
    
    
}



