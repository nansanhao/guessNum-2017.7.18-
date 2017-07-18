/**
 * Created by chj on 17-7-18.
 */
'use strict';
//1,2,3,4
function guessNum(num1,num2,num3,num4) {
    let rightNumber=[1,2,3,4];
    let guessNumber=[num1,num2,num3,num4];
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
    return `${numA}A${numB}B`;
}


describe('guess number', () => {

    it('0A0B', () => {

        let actualResult=guessNum(5,6,7,8);
        let expectResult="0A0B";
        expect(actualResult).toEqual(expectResult);
    });
    it('0A1B', () => {

        let actualResult=guessNum(5,6,2,8);
        let expectResult="0A1B";
        expect(actualResult).toEqual(expectResult);
    });
    it('0A2B', () => {

        let actualResult=guessNum(4,6,2,8);
        let expectResult="0A2B";
        expect(actualResult).toEqual(expectResult);
    });
    it('0A3B', () => {

        let actualResult=guessNum(4,3,2,8);
        let expectResult="0A3B";
        expect(actualResult).toEqual(expectResult);
    });
    it('0A4B', () => {

        let actualResult=guessNum(4,3,2,1);
        let expectResult="0A4B";
        expect(actualResult).toEqual(expectResult);
    });
    it('1A0B', () => {

        let actualResult=guessNum(5,6,3,8);
        let expectResult="1A0B";
        expect(actualResult).toEqual(expectResult);
    });
    it('1A1B', () => {

        let actualResult=guessNum(4,6,3,8);
        let expectResult="1A1B";
        expect(actualResult).toEqual(expectResult);
    });
    it('1A2B', () => {

        let actualResult=guessNum(4,6,3,1);
        let expectResult="1A2B";
        expect(actualResult).toEqual(expectResult);
    });
    it('1A3B', () => {

        let actualResult=guessNum(4,1,3,2);
        let expectResult="1A3B";
        expect(actualResult).toEqual(expectResult);
    });
    it('2A0B', () => {

        let actualResult=guessNum(1,6,3,8);
        let expectResult="2A0B";
        expect(actualResult).toEqual(expectResult);
    });
    it('2A1B', () => {

        let actualResult=guessNum(1,6,3,2);
        let expectResult="2A1B";
        expect(actualResult).toEqual(expectResult);
    });
    it('2A2B', () => {

        let actualResult=guessNum(1,4,3,2);
        let expectResult="2A2B";
        expect(actualResult).toEqual(expectResult);
    });
    it('3A0B', () => {

        let actualResult=guessNum(1,2,3,8);
        let expectResult="3A0B";
        expect(actualResult).toEqual(expectResult);
    });
    it('4A0B', () => {

        let actualResult=guessNum(1,2,3,4);
        let expectResult="4A0B";
        expect(actualResult).toEqual(expectResult);
    });

});