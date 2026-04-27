let arr = [1,3,2,4];
 
let isSorted = true
for(let i = 0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        isSorted = false
        break;
    }
}
console.log( isSorted);
