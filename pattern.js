
//-----------simple right angled triangle--------------


// let prompt= require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for(let i = 1; i<=n;i++){  //row 
//     for(let j=1;j<=n;j++){      //column
//     process.stdout.write("* ")
// }
// console.log();

// }

    //  ------------- number pattern ---------------------

// let prompt =require('prompt-sync')();
// let n =Number(prompt("Enter a number"));
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j+" " )
//     }
//     console.log();
    
//  }
 
//---------right angled triangle from right side------------

// let prompt = require('prompt-sync')();
// let n = Number(prompt("enter number"));
// for(let i = 1; i<= n; i++){
//     for(let j=1; j<=n-i;j++){
//         process.stdout.write("   ");

//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write(" *   ");
//     }
//     console.log();
    
// }



//-----------alphabets right angled triangle---------



// let prompt= require('prompt-sync')();
// let n =Number(prompt("Enter number"));
// for(let i =1; i<=n; i++){
//     let ascii = 65;
//     for(let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ")
//         ascii++;
//     }
//     console.log();
    
// }




// X pattern 


// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i<=n;  i++){
//     for(let j= 1;j<=n;j++){
//         if(i+j==n+1 || j==i){
//             process.stdout.write("* ");
            
//         }else{
//             process.stdout.write(" ");

//         }
//     }
//     console.log();
    
// }



// V pattern


let prompt = require('prompt-sync')();
let n = Number(prompt("Enter number"));
for(let i = 1; i<=n; i++){
    for(let j=1;j=2*n-1;j++){
        if(i==j || i+j == 2*n){
            process.stdout.write("* ")
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
    
}