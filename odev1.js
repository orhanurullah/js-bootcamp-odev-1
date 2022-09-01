"use strict";
const app = document.querySelector('#app');
function primeNumbers(...numbers){
    let nums = numbers.filter((value) => isPrime(value));
    console.log(nums.join(' * '));
    return nums;
}
function isPrime(num){
    if(num < 2){
        return false;
    }
    let state = true;
    for(let i = 2; i <= Math.floor(num/2); i++){
        if(num%i === 0){
            state = false;
            break;
        }
    }
    return state;
}
const primeNums = primeNumbers(101,1,2, 5, 8, 21, 13);
app.innerHTML += "Prime Number Find Function : " + primeNums.join(' - ');

function friendNumbers(a, b){
    return totalAllDivision(a) === b &&  totalAllDivision(b) === a;
}
function totalAllDivision(num){
    let n = 0;
    for(let i = 1; i <= num/2; i++){
        if(Number.isInteger(num/i)){
            n += i;
        }
    }
    return n;
}
const isFriendNums = friendNumbers(220, 284);
app.innerHTML += "<br />Friend Numbers Function for 220 - 284 : " + (isFriendNums ? ' Evet ': 'Hayır');

function excellentNumbersFind(number){
    const arr = [];
    for(let i = 1; i <= number; i++){
        if(isExcellentNumber(i)){
            arr.push(i);
        }
    }
    return arr;
}
function isExcellentNumber(num){
    let total = 0;
    for(let i = 1; i <= num; i++){
        if(Number.isInteger(num/i)){
            total += i;
        }
    }
    return num*2 == total;
}
console.log(excellentNumbersFind(10));
app.innerHTML += "<br />Excellent Numbers under the 1000 : " + excellentNumbersFind(1000).join(' - ');

function getPrimeNumbers(number){
    const arr = [];
    for(let i = 0; i <= number; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
}
console.log(getPrimeNumbers(1000));
app.innerHTML += "<br />Get Prime Numbers under the 1000 : Toplam " + getPrimeNumbers(1000).length +  " asal sayı bulundu.<br />" + getPrimeNumbers(1000).join(' - ');