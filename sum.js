prompt = require('prompt-sync')();
const n = Number(prompt("enter a number that you want to add"));
let sum =0;
if(n<=0 && isNaN(n)){
    console.log("number should be greater than zero");
    
}else{
    for(let i = 1;i<=n;i++){
        sum= sum +i;
    }
    console.log("sum is",sum);
    

}