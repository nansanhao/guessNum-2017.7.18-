/**
 * Created by chj on 17-7-18.
 */
'use strict';
let readlineSync = require('readline-sync');
function guessNum() {

    let guessNumber=this.inputGuessNum();
    let rightNumber=this.getRandomNum();

    let numA=0;
    let numB=0;
    for(var i in rightNumber){
        if(guessNumber.indexOf(rightNumber[i])==i){
            numA++;
        }
        if(guessNumber.indexOf(rightNumber[i])!=-1&&guessNumber.indexOf(rightNumber[i])!=i){
            numB++;
        }
    }
    //console.log("正确答案："+`${numA}A${numB}B`);
    return `${numA}A${numB}B`;
}
function getRandomNum() {
    let tag=0;
    let randomNum=[];
    let temp=0;
    while(randomNum.length!=4){
        tag=0;
        temp=Math.floor(Math.random()*10);
        for(let i=0;i<randomNum.length;i++){
            if(temp===randomNum[i]){
                tag=1;
            }
        }
        if(tag===0){
            randomNum.push(Number(temp));
        }
    }
    console.log(randomNum);
    return randomNum;
}
function inputGuessNum() {
    let guess=readlineSync.question("你猜的数字是(逗号隔开)：");
    console.log("你的数字："+guess.slice());
    return guess.slice(',');
}


//console.log(inputGuessNum());

//console.log(guessNum());
module.exports.guessNum=guessNum;
module.exports.inputGuessNum=inputGuessNum;
module.exports.getRandomNum=getRandomNum;






