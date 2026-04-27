let arr  = [10,5,20,8];

if(arr.length<2){
    return null
}
let min = Infinity;
let sMin = Infinity;

for(let i = 0; i< arr.length; i++){
    if(arr[i]<min){
        sMin = min;
        min = arr[i];
    }else if(arr[i]<sMin && min !== arr[i]){
        sMin = arr[i]
    }
}
console.log( sMin);
