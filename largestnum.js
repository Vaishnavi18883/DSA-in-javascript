const a = 30;
const b = 20;
const c = 10;
function findmax(a,b,c) {
    

if (a>=b&&a>=c) {
  return a;
    
    
} else if (b>=a&&b>=c) {
 return b;    
}else{
   return c;
    
}
}
console.log("largest number is ",findmax(a,b,c));
