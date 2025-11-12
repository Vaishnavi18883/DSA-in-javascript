let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number"));
  for(i=2;i<=n;i++){
     let isPrime=true;
  
      for(j=2;j<= Math.floor(i/2);j++){
        if(i%j===0){
          isPrime = false;
        break;
        }
      }

      if(isPrime===true){
  console.log(i)
  
}


      } 
    
