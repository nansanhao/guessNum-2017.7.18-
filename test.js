/**
 * Created by chj on 17-7-18.
 */
'use strict';

function guessNum(num1,num2,num3,num4) {
    let rightNumber=[1,2,3,4];
    let guessNumber=[num1,num2,num3,num4];
    let numA=0;
    let numB=0;
    for(var i in rightNumber){
        if(guessNumber.indexOf(rightNumber[i])===i){
            numA++;
        }
        if(guessNumber.indexOf(rightNumber[i])!=-1&&guessNumber.indexOf(rightNumber[i])!=i){
            numB++;
        }
    }
    return `${numA}A${numB}B`;
}
console.log(guessNum(1,2,5,4));

