/**
 * Created by chj on 17-7-18.
 */
'use strict';

let guessNumModule=require("./text");
let sinon=require("sinon");

function text0A0B() {

    let randomStub=sinon.stub(guessNumModule,"getRandomNum").returns([1,2,3,4]);
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([5,6,7,8]);

    let actualResult=guessNumModule.guessNum();
    let expectResult="0A0B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    //randomStub.restore();
    inputStub.restore();
}
text0A0B();
function text0A1B() {

    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([5,6,2,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="0A1B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text0A1B();
function text0A2B() {

    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([4,6,2,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="0A2B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text0A2B();
function text0A3B() {

    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([4,3,2,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="0A3B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text0A3B();
function text0A4B() {

    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([4,3,2,1]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="0A4B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text0A4B();
function text1A0B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([5,6,3,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="1A0B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text1A0B();
function text1A1B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([4,6,3,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="1A1B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text1A1B();
function text1A2B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([4,6,3,1]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="1A2B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text1A2B();
function text1A3B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([4,1,3,2]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="1A3B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text1A3B();
function text2A0B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([7,2,3,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="2A0B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text2A0B();
function text2A1B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([1,6,3,2]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="2A1B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text2A1B();
function text2A2B() {
    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([1,4,3,2]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="2A2B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text2A2B();
function text3A0B() {

    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([1,2,3,8]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="3A0B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text3A0B();
function text4A0B() {

    let inputStub=sinon.stub(guessNumModule,"inputGuessNum").returns([1,2,3,4]);
    let actualResult=guessNumModule.guessNum();
    let expectResult="4A0B";
    console.log("测试类型："+expectResult+"  测试结果："+(actualResult==expectResult?"text passed":"text failed"));
    inputStub.restore();
}
text4A0B();






