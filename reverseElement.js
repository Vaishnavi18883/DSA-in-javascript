function reverseElement(arr,start, end) {
    let i = start;
    let j = end;
    while (i<j) {
        [arr[i],arr[j]]= [arr[j], arr[i]]
        i++
        j--
        
    }
    return arr
    
    
}
console.log(reverseElement([1,2,3,4,5],2,4,));
