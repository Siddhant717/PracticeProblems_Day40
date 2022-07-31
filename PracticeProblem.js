//1-Use random function to get single digit
let singledigitnumber = Math.floor(Math.random() * 10);  
console.log("Single digit number is "+singledigitnumber);


//2-Use Random to get Dice Number between 1 to 6
let dicenumber = Math.floor(Math.random() * 6)+1;  
console.log("Random Dice Number is "+dicenumber);


//3- Add two Random Dice Number and Print the Result
let dicenumber1 = Math.floor(Math.random() * 6)+1;  
let dicenumber2 = Math.floor(Math.random() * 6)+1;  
console.log("Random number on Dice Number1 is "+dicenumber1);
console.log("Random number on Dice Number2 is "+dicenumber2);
console.log("Addition of 2 random dice numbers is "+(dicenumber1+dicenumber2));


//4-Generate 2 digit random number then find their sum and the average
let number = 0;
let sum = 0;
let countOfRandommNumbers = 5;

for(let i = 0; i < countOfRandommNumbers; i++){
    number = Math.floor(Math.random()*100);
    sum = sum + number;
}
let average = sum / countOfRandommNumbers;
console.log("The sum of 5 random two digit number is :" + sum);
console.log("The average of 5 random two digit number is :" + average);


//5- Unit Conversion
  //a- Inch to Ft
  let a=42;
  let result1=a/12;
  console.log("42 in = "+result1+" ft");
  

  //b- Rectangular Plot of 60 feet x 40 feet in meters
  let AreaInFeet=60*40;
  let result2=AreaInFeet/10.764;
  console.log("Plot area in meter : "+result2);
   
  //c- Calculate area of 25 such plots in acres
  let result3=AreaInFeet*25/43560;
   console.log("25 plots area in acres is : "+result3);

