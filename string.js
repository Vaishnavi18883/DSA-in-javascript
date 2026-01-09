let s =  "A man, a plan, a canal: Panama";
let i = 0;
let j = s.length-1;
let ispalindrome = true;
 
const isAlphaNum = (ch)=> /^[a-z0-9]$/i.test(ch)

while (i<j) {
    if(!isAlphaNum(s.charAt(i))){
        i++;
        continue;
    }
    if (!isAlphaNum(s.charAt(j))) {
        j--;
        continue;
    }

    if(s.charAt(i).toLowerCase()!==s.charAt(j).toLowerCase()){
        ispalindrome= false;
        break
    }
    i++;
    j--
}
console.log(ispalindrome);
