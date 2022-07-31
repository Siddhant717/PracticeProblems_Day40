//1- Read a single digit number and write the number in word
let number = Math.floor(Math.random()*10)%10;
console.log("Number : "+ number);

if (number == 1) 
{
    console.log("One");
} else if (number == 2) 
{
    console.log("Two");
} else if (number == 3) 
{
    console.log("Three");
} else if (number == 4) 
{
    console.log("Four");
} else if (number == 5) 
{
    console.log("Five");
} else if (number == 6) 
{
    console.log("Six");
} else if (number == 7) 
{
    console.log("Seven");
} else if (number == 8)
{
    console.log("Eight");
} else if (number == 9)
{
    console.log("Nine");
} else if (number == 0) 
{
    console.log("Zero");
} else 
{
    console.log("Invalid number");
}


//2 Read a Number and Display the week day
let num = Math.floor(Math.random()*8);
console.log("Number : "+num);
if (num == 1) {
    console.log("Day-Its Monday");
} else if (num == 2) {
    console.log("Day-Its Tuesday");
} else if (num == 3) {
    console.log("Day-Its Wednesday");
} else if (num == 4) {
    console.log("Day-Its Thursday");
} else if (num == 5) {
    console.log("Day-Its Friday");
} else if (num == 6) {
    console.log("Day-Its Saturday");
} else if (num == 7) {
    console.log("Day-Its Sunday");
} else {
    console.log("You can't take a number as zero.");
}

//3-Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let power = Math.floor(Math.random()*10)%10;
let numb = 10**power;
console.log("Number : "+numb);

if (numb == 1) 
{
    console.log("One");
}
else if (numb == 10)
{
    console.log("Ten");
} 
else if (numb == 100)
{
    console.log("Hundred");
} 
else if (numb == 1000) 
{
    console.log("Thousand");
} 
else if (numb == 10000) 
{
    console.log("Ten thousand");
}
 else if (numb == 100000)
{
    console.log("One Lakh");

} 
else if (numb == 1000000)
{
    console.log("Ten Lakh");
}
else if (numb == 10000000)
{
    console.log("Ten million");

}
else if (numb == 100000000 )
{
    console.log("One hundred million");


}
else if (numb == 1000000000 )
{
    console.log("One billion");

}

//4- Arithmetic Operation (Find max and min number)
let a= 50;
let b= 40;
let c= 80;

let result1= a + b * c
let result2 = a % b + c
let result3 = c + a / b
let result4= a * b + c

console.log("Result1 " + result1);
console.log("Result2 " + result2);
console.log("Result3 " + result3);
console.log("Result4 " + result4);


if(result1>result2 && result1>result3 && result1>result4)
{
    console.log("The Max number is :" + result1)
} 
else if(result1<result2 && result1<result3 && result1<result4)
{
    console.log("The Min number is :" + result1)
}

if(result2>result1 && result2>result3 && result2>result4)
{
    console.log("The Max number is :" + result2)
} 
else if(result2<result1 && result2<result3 && result2<result3)
{
    console.log("The Min number is :" + result2)
}
if(result3>result1 && result3>result2 && result3>result4)
{
    console.log("The Max number is :" + result3)
} 
else if(result3<result1 && result3<result2 && result3<result4)
{
    console.log("The Min number is :" + result3)
}
if(result4>result1 && result4>result2 && result4>result3)
{
    console.log("The Max number is :" + result4)
} 
else if(result4<result1 && result4<result2 && result4<result3)
{
    console.log("The Min number is :" + result4)
}