let prompt = require('prompt-sync')();
 let num = Number(prompt("Enter a number"));
 let originalNum = num ;

 let sum = 0;

 while(num>0){
     let rem = num%10;
     let fact = 1;
     for(let i = 1; i<=rem; i++){
         fact = i * fact;
     }
     num = Math.floor(num/10);
   sum = fact +sum;
 }

 if (originalNum=== sum){
     console.log("strong number");
    
 }
 else{ 
    console.log("not strong");
    
}
