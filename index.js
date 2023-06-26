"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var FirstNumber = (0, readline_sync_1.question)("Enter a first number:\n");
    var Opreand = (0, readline_sync_1.question)("Enter a Operand:\n");
    var SecondNumber = (0, readline_sync_1.question)("Enter a second Number:\n");
    if (isNumber(FirstNumber) && isNumber(SecondNumber) && isOperand(Opreand)) {
        var firstnum = parseInt(FirstNumber);
        var secondnum = parseInt(SecondNumber);
        calculate(firstnum, secondnum, Opreand);
    }
    else {
        console.log("Invalid Input");
    }
}
function isOperand(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    return !isNaN(parseInt(str));
}
function calculate(firstnum, secondnum, Operand) {
    switch (Operand) {
        case "+":
            console.log(firstnum + secondnum);
            break;
        case "-":
            console.log(firstnum - secondnum);
            break;
        case "*":
            console.log(firstnum * secondnum);
            break;
        case "/":
            console.log(firstnum / secondnum);
            break;
    }
}
main();
