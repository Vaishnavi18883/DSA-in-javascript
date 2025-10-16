let arr = [12,2,45,67,8];
let i = 0, j= arr.length-1;
while (i>j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
}
console.log(arr);
