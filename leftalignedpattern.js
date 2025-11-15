let n = 5  ;
for(i=1; i<=n; i++ ){

let line = "";
for (let space=1; space<=n-i;space++){
   line += " ";
 
}

    for(let j=1; j<=i; j++){
       line += "* "
       
    }
    
    console.log(line);
}
