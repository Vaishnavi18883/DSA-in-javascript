let arr = [30,43,545,67,87,45];
let max = arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max= arr[i];
    }
}
console.log(max);

