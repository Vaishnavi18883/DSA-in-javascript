let prompt = require('prompt-sync')()
let l = Number(prompt("Enter length of rectangle"));
let b = Number(prompt("Enter breadth of rectangle"));
let area = l*b;
let perimeter = 2*(l+b);
process.stdout.write("Area of rectangle is"+area +"\n");
process.stdout.write("perimeter of rectangle"+perimeter +"\n");

