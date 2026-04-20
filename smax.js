let arr = [10,20,30,40,40];
let max = Math.max(arr[0],arr[1])
let smax = Math.min(arr[0],arr[1])
for(let i = 2; i<arr.length;i++){
    if(max<arr[i]){
        smax = max;
        max= arr[i];
    }else if(smax<max && max !== arr[i]){
        smax= arr[i];
    }
}
console.log(smax);
