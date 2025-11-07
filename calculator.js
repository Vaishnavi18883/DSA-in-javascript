let prompt = require('prompt-sync')();
let a = Number(prompt("Enter first number :"));
let b = Number(prompt("Enter second number :"));
process.stdout.write("adition is : ",a+b);
process.stdout.write("subtraction is : ",a-b);
process.stdout.write("multiplication is : ",a*b);
if (b!==0) {
    process.stdout.write("Divison is : ",a/b);
    
    
} else {
    process.stdout.write("division is not possible");
    
    
}




