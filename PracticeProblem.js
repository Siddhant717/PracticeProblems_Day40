//1- Read a single digit number and write the number in word using Case
let Num = Math.floor(Math.random()*10)%10;
console.log("Number : "+ Num);

switch(Num){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid number");
        break;
}

//2-Read a Number and Display the week day (Sunday, Monday,...)
let DayNumber = Math.floor(Math.random()*7) + 1;
console.log("Number : "+DayNumber);
switch(DayNumber){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number");
        break;
}

//3- Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let power = Math.floor(Math.random()*10)%7;
let Numb = 10**power;
console.log("Number : "+Numb);
switch(Numb){
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("One Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    default:
        console.log("Not in Range");
        break;
}

//4 UnitConversion
console.log(" enter 1 for Feet to Inch");
console.log(" enter 2 for Feet to Meter");
console.log(" enter 3 for Inch to Feet");
console.log(" enter 4 for Meter to Feet");


var readlineSync = require('readline-sync');

var input = parseInt(readlineSync.question("Enter the number :")) 

switch(input)
{
case 1:
  var readlineSync = require('readline-sync');
//convert ft to inch
var input1 = parseInt(readlineSync.question("Enter No in Feet :"))
let result = 12*input1;
console.log(input1 +"ft =" +result+"inch");
break;

//convert ft to m
case 2:
var readlineSync = require('readline-sync');
var input2 = parseInt(readlineSync.question("Enter Number in Feet :"));
let result1 = 0.3048*input2;
console.log(input2 +"ft =" +result1+"meter");
break;

//convert inch to ft
case 3:
var readlineSync = require('readline-sync');
var input3 = parseInt(readlineSync.question("Enter Number in inch :"));
let result2 = 0.0833*input3;
console.log(input3 +"inch =" +result2+"ft");
break;

//convert m to ft
case 4:
var readlineSync = require('readline-sync');
var input4 = parseInt(readlineSync.question("Enter Number in meter :"));
let result3 = 3.2808*input4;
console.log(input4 +"meter =" +result3+"ft");
break;
default :
console.log("Enter a valid number");
break;
}