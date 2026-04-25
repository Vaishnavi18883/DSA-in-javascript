function rotateByOne(arr) {
 
    let j= arr[arr.length-1];
    for (let i= arr.length-1; i>0; i--) {
       arr[i]= arr[i-1]
    }
 arr[0]= j


return arr
}

console.log(rotateByOne([1,2,3,4,5]));
