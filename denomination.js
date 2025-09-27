let amt = 250;
if(amt>500){
    console.log("notes of  500",Math.floor(amt/500));
    amt= amt%500
    
}
if(amt>200){
    console.log("notes of  200",Math.floor(amt/200));
    amt= amt%200
}
if(amt>100){
    console.log("Notes of 100",Math.floor(amt/100));
    amt =amt%100
    
}
if(amt>50){
    console.log("Notes of 50",Math.floor(amt/50));
    amt =amt%50
    
}
if(amt>20){
    console.log("Notes of 20",Math.floor(amt/20));
    amt =amt%20
    
}
if(amt>10){
    console.log("Notes of 10",Math.floor(amt/10));
    amt =amt%10
    
}
if(amt>5){
    console.log("Notes of 5",Math.floor(amt/5));
    amt =amt%5
    
}
if(amt>2){
    console.log("Notes of 2",Math.floor(amt/2));
    amt =amt%2
    
}
if(amt===1){
    console.log("notes of 1",+amt);
    
    
}