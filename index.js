// Write your code here

//multiply
const num1 = 62;
const num2 = 1;
const multiply = num1*num2;

//random

const random = Math.floor(Math.random() * 100) + 1;

//mod

const num3 =10
const num4 =6
const mod = num3 % num4;

//max

const numbers = [10, 5, 'abc', 20, 15];
const filteredNumbers = numbers.filter(num => typeof num === 'number');

const max = filteredNumbers.length > 0 ? Math.max(...filteredNumbers) : NaN;