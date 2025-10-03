let arr = [30,43,545,67,87,45];
// let max = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max= arr[i];
//     }
// }
// console.log(max);

// let max = Math.max(arr[0],arr[1])
// let smax = Math.min(arr[0],arr[1])

// for(let i = 2; i<arr.length;i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i]
//     }else if(arr[i]>smax && max!= arr[i]){
//         smax= arr[i];
//     }
// }

// console.log(smax);

let min = Math.min(arr[0],arr[1])
let smin= Math.max(arr[0],arr[1])
 
for(let i=2; i<arr.length;i++){
    if(arr[i]<min){
        smin = min;
        min = arr[i];
    }else if (arr[i]<smin && min != arr[i] ){
        smin = arr[i]
    }
}
console.log(smin);
