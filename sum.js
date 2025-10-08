

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
