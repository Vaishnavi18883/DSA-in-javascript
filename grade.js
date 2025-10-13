let prompt = require('prompt-sync')();
let marks = Number(prompt("Enter your marks"));
if(marks>= 90){
    process.stdout.write("A");
}else if(marks>=75){
    process.stdout.write("B");
}else if (marks>=50){
    process.stdout.write("C");
}else{
    process.stdout.write("Fail");
}