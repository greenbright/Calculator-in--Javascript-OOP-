'use strict'
class Calculator{
	constructor(calAnswerBottom,calAnswerTop){
		this.calAnswerBottom = calAnswerBottom;
		this.calAnswerTop = calAnswerTop;
		this.clear();

	}
	
clear(){
	this.currentOperand = ''
	this.prevOperand = ''
	this.operation = undefined
	

	}
delete(){
	this.currentOperand = this.currentOperand.toString().slice(0,-1);
	console.log(this.currentOperand);

	}

appendNumber(number){
	console.log(number);
	if(number === '.' && this.currentOperand.includes('.') ) return
	this.currentOperand = this.currentOperand.toString() + number.toString()
	console.log(this.currentOperand);

}
chooseOperation(operation){
if(this.currentOperand ===  '')return
if(this.prevOperand !== ''){
	this.compute()
}
this.operation = operation;
this.prevOperand= this.currentOperand;
this.currentOperand = ''

}
compute(){ 
	let computation
	const prev = parseFloat(this.prevOperand)
	const current = parseFloat(this.currentOperand)
	if(isNaN(prev)|| isNaN(current)) return
	 
	switch(this.operation){
	 case '+':
		computation = prev + current
		break;
		case '-':
		computation = prev - current
		break
		case '/':
		computation = prev / current
		break
		case '*':
		computation = prev *current
		break
		default:
		return
	}
	this.currentOperand = computation
	this.operation = undefined
	this.prevOperand = ''

}
updateDisplay(){
	this.calAnswerBottom.innerText = this.currentOperand;
	this.calAnswerTop.innerText = this.prevOperand;

}
}
const calAnswerTop = document.querySelector('.cal-answer-top');
const delBtn = document.querySelector('.del-operation');
const calAnswerBottom = document.querySelector('.cal-answer-bottom');
const operationBtn = document.querySelectorAll('.operation');
const numberBtn = document.querySelectorAll('.number')
const clearAll = document.querySelector('#clear-all');
const equalBtn = document.querySelector('#equal-sign');


const calculator  = new Calculator(calAnswerBottom,calAnswerTop);
 

//Arrow function
numberBtn.forEach((btn)=> btn.addEventListener('click',function(){
	 calculator.appendNumber(btn.innerText);
	 console.log(btn.innerText);
 	 calculator.updateDisplay(); 

}))
//Arrow function
operationBtn.forEach((btn)=> btn.addEventListener('click',function(){
	calculator.chooseOperation(btn.innerText) 
	 calculator.updateDisplay(); 

}))
//
equalBtn.addEventListener('click', function(){
	calculator.compute()
	calculator.updateDisplay()
}
)
clearAll.addEventListener('click',function(){
calculator.clear()
calculator.updateDisplay()

})
delBtn.addEventListener('click', function(){
	calculator.delete()
	calculator.updateDisplay()
	

})