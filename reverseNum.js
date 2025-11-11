let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number"))
var originalNum = n
    let rev = 0
    while (n>0) {
        var rem = n%10
       rev = rev*10 +rem
        n = Math.floor(n/10);

    }
     if(originalNum === rev){
        console.log("number is palidrom");
        
     }else{
        console.log("Number is not palidrom");
        
     }
     
