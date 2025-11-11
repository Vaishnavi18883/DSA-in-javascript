let prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number"))
let originalNum = num;
let sum = 0;
for(let i = 1; i<=Math.floor(num/2);i++){
    if(num%i === 0){
        sum += i;
        
    }

}
if(originalNum=== sum){
    console.log("perfect number");
    
}
else{
    console.log("Not perfect number");
    
}
