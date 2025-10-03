





X pattern 


let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number"));
for (let i = 1; i<=n;  i++){
    for(let j= 1;j<=n;j++){
        if(i+j==n+1 || j==i){
            process.stdout.write("* ");
            
        }else{
            process.stdout.write(" ");

        }
    }
    console.log();
    
}



