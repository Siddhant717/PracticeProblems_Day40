//1- Generate 5 digit random numbers then output the min and max value
let num1 = Math.floor(Math.random()*900)+100;
let num2 = Math.floor(Math.random()*900)+100;
let num3 = Math.floor(Math.random()*900)+100;
let num4 = Math.floor(Math.random()*900)+100;
let num5 = Math.floor(Math.random()*900)+100;
console.log("Three digit random numbers are "+ num1,num2,num3,num4,num5);

//For finding Max Number
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log(num1 + " is maximum number");
}
if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log(num2 + " is maximum number");
}
if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
{
    console.log(num3 + " is maximum number");
}
if(num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log(num4 + " is maximum number");
}
if(num5>num2 && num5>num3 && num5>num4 && num5>num1)
{
    console.log(num5 + " is maximum number");
}
//For finding Min Number
if(num1<num2 && num1<num3 && num1<num4 && num1<num5)
{
    console.log(num1 + " is minimum number");
}
if(num2<num1 && num2<num3 && num2<num4 && num2<num5)
{
    console.log(num2 + " is minimum number");
}
if(num3<num1 && num3<num2 && num3<num4 && num3<num5)
{
    console.log(num3 + " is minimum number");
}
if(num4<num1 && num4<num2 && num4<num3 && num4<num5)
{
    console.log(num4 + " is minimum number");
}
if(num5<num2 && num5<num3 && num5<num4 && num5<num1)
{
    console.log(num5 + " is minimum number");
}


//2-Check whether the generated Day & Month falls between  given Day & Month or not
console.log("Check day of month is between March 20 and June 20");

let day=(Math.floor(Math.random() * 10)%31)+1;
let month=(Math.floor(Math.random() * 10)%6)+1;

console.log("Day : "+day+" & Month : "+month);
if ( day> 20 && day< 31 && month == 3 )
{
    console.log("Input date is within range.");
}
else if ( day> 1 && day< 30 && month == 4 )
{
    console.log("Input date is within range.");
}
else if ( day> 1 && day< 31 && month == 5 )
{
    console.log("Input date is within range.");
}
else if ( day> 1 && day< 20 && month == 6 )
{
    console.log("Input date is within range.");
}
else
{
    console.log("False");
}

//3-Check Whether the input year is a leap year or not..
var readlineSync = require('readline-sync');

var year = readlineSync.question("Enter the year :")

if (year % 400 == 0)
{
    console.log("It is a leap year");

}
else if (year % 100 == 0)
{
    console.log(" It is not a leap year");
}
else if (year % 4 == 0)
{
    console.log("It is a leap year");
}
else
{
    console.log("It is not a leap year");
}


//4- Program to simulate a coin flip and print out Head or Tail

let tail = Math.floor(Math.random()*10) % 2;
if(tail == 0)
{
    console.log("Tail");
}
else
{
    console.log("Head");
}