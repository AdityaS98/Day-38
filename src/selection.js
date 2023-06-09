// Find samllest and largest number amoung 5 numbers
let a =  Math.floor( Math.random()*900 ) + 100;
let b =  Math.floor( Math.random()*900 ) + 100;
let c =  Math.floor( Math.random()*900 ) + 100;
let d =  Math.floor( Math.random()*900 ) + 100;
let f =  Math.floor( Math.random()*900 ) + 100;

if (a>b && a>c && a>d && a>f){
    console.log("Largest number "+a);
}
else if (b>a && b>c && b>d && b>f){
    console.log("Largest number "+b);
}
else if (c>a && c>b && c>d && c>f){
    console.log("Largest number "+c);
}
else if (d>a && d>c && d>b && d>f){
    console.log("Largest number "+d);
}
else{
    console.log("Largest number "+f);
}

if (a<b && a<c && a<d && a<f){
    console.log("Smallest number "+a);
}
else if (b<a && b<c && b<d && b<f){
    console.log("Smallest number "+b);
}
else if (c<a && c<b && c<d && c<f){
    console.log("Smallest number "+c);
}
else if (d<a && d<c && d<b && d<f){
    console.log("Smallest number "+d);
}
else{
    console.log("Smallest number "+f);
}

//To take date and print true or false
var date = prompt("Enter date");
var month = prompt("Enter month"); 
if(month==3 && date>=20){
    console.log("true");
}
else if(month==6 && (date<=20 && date>0)){
    console.log("true");
}
else if((month>4 && month<6) && (date>0 && date<32)){
    console.log("true");
}
else{
    console.log("false"); 
}

//3)To check leap year
const year = prompt('Enter a year:');
//three conditions to find out the leap year
if ((0 == year % 4)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

//4) To flip coin
let number6 = Math.random();

if (number6 < 0.5) {
  console.log("HEAD");
} else {
  console.log("TAIL");
}

//1)To read number and print in word
let number7 = prompt("enter number");
if(number7==1){
    console.log("One");
}
else if(number7==2){
    console.log("Two");
}
else if(number7==3){
    console.log("Three");
}
else if(number7==4){
    console.log("Four");
}
else if(number7==5){
    console.log("Five");
}
else if(number7==6){
    console.log("Six");
}
else if(number==7){
    console.log("Seven");
}
else if(number7==8){
    console.log("Eight");
}
else if(number7==9){
    console.log("Nine");
}
else if(number7==10){
    console.log("Ten");
}
else{
    console.log("Invalid Number");
}

//2)To read number and print day according to number
let number2 = prompt("enter day number");
if(number2==1){
    console.log(" Day is Sunday");
}
else if(number2==2){
    console.log("  Day is Monday");
}
else if(number2==3){
    console.log(" Day is Tuesday");
}
else if(number2==4){
    console.log(" Day is Wednesday");
}
else if(number2==5){
    console.log(" Day is Thursday");
}
else if(number2==6){
    console.log(" Day is Friday");
}
else if(number2==7){
    console.log(" Day is Saturday");
}
else{
    console.log("Invalid Day Number");
}

//3)To find unit,ten,hundred values of number

let num = prompt("Enter number");

const placeValue = (num, res = [], factor = 1) => {
    if(num){
       const val = (num % 10) * factor;
       res.unshift(val);
       return placeValue(Math.floor(num / 10), res, factor * 10);
    };
    return res;
 };
 console.log(placeValue(num));

 //4)Arthmetic of three numbers
 let x = prompt("Enter first number");
 
 let y = prompt("Enter second number");
 
 let z = prompt("Enter third number");

 console.log(x+(y*z));
 console.log((x%y)+z);
 console.log(z+(x/y));
 console.log((x*y)+z);
