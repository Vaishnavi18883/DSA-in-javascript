let prompt = require('prompt-sync')();
let s =prompt("Enter a string :");
let i= 0; j=s.length-1;
let ispalindrome = true;
while(i<j){
    if(s.charAt(i)!= s.charAt(j)){
        ispalindrome= false;
        break
    }
    i++;
    j--;
}
if(ispalindrome) {console.log("String is palindrome");}
else{ console.log("String is not palindrome");}
