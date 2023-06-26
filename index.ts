import { question } from "readline-sync";
function main():void{
    const FirstNumber:string=question("Enter a first number:\n")
    const Opreand:string=question("Enter a Operand:\n")
    const SecondNumber:string=question("Enter a second Number:\n")
    if(isNumber(FirstNumber) && isNumber(SecondNumber) && isOperand(Opreand)){
        const firstnum=parseInt(FirstNumber);
        const secondnum=parseInt(SecondNumber)
        calculate(firstnum,secondnum,Opreand)


    }
    else{
        console.log("Invalid Input")
    }

}
function isOperand(operator:string):boolean{
    switch(operator){
        case "+":
        case "-":
        case "*":
        case "/":
            return true

        default : 
            return false
    }
}
function isNumber(str:string):boolean{
    return !isNaN(parseInt(str));
}
function calculate(firstnum:number,secondnum:number,Operand:string):void{
        switch(Operand){
            case "+":
                console.log(firstnum+secondnum)
                break;
            case "-":
                console.log(firstnum-secondnum)
                break;
            case "*":
                    console.log(firstnum*secondnum)
                    break;
            case "/":
                    console.log(firstnum/secondnum)
                    break;

        }
}
main();