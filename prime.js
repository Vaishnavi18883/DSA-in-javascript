n=11
isPrime = true;
for(i=2;i<=Math.floor(n/2);i++){
    if(n%i===0){
        isPrime= false;
        
        
        break;
    }
}
console.log(n,"Is it prime number---",isPrime);
