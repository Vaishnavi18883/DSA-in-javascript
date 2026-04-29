let arr = [1,2,3,4,5];
let prompt = require('prompt-sync')();
let k = Number(prompt("Enter a value"))
k = k% arr.length


function rightReverse(i , j) {
    while (i<j) {
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j-- 
        
    }
    
}
rightReverse(0, arr.length-1);
rightReverse(0, k-1);
rightReverse(k, arr.length-1);


console.log(arr);
