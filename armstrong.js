let prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number"));
 let count = 0;
 let sum = 0;
 let originalNum = num;
 let temp = num
 

 while (temp>0) {
    count++
     temp = Math.floor(temp/10);
   
    
 }
 while (num>0) {
    let rem = num%10;
    sum += rem ** count;
    num = Math.floor(num/10);
    
 }
 if(originalNum === sum){
    console.log("Armstrong number");
    
 }
 else{
    console.log("Not Armstrong number");
    
 }
