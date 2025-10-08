// var n= prompt("Kaha tak add Karoge")

// var n = 34;
// if(n=== null){
//       console.log("please give valid input");
      
// }else{
//     // var n= Number(n);

// if(isNaN(n)){
//     console.log("Invalid Input");
    
// }else{
//     if (n>0) {
//         var sum= 0;
//         for(var i=1;i<=n;i++){
//             sum+=i

//         }
//         console.log("sum is", sum);
        
        
//     }else{
//         console.log("number should be positive & more than");
        
//     }
// }
// }


var n = 5;
   if (isNaN(n) || n <= 0) {

    console.log("Invalid Input ");
    
}else{
    
        let fact = 1;
        for (let i=1;i<=n;i++){
            fact *= i;
        }
        console.log("Factorial is",fact);
        
    
}