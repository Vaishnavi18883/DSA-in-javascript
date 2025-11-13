let prompt = require('prompt-sync')();
let num = Number(prompt("Enter number"));

let currentNum = 2;
for (let i = 1; i <= num; i++) {
    let line = " ";
    let count = 0;
    while (count < i) {
        let isPrime = true;
        for (let k = 2; k <= Math.floor(currentNum / 2); k++) {

            if (currentNum % k === 0) {
                isPrime = false;
                break;
            }

        }
        if (isPrime === true) {
            line += currentNum +" ";
            count++;

        }
        currentNum++;

    }
    console.log(line.trim());

}
