
//To get single digit random number
let a = (Math.floor(Math.random()*10));
console.log(a);

//To get dice number between 1 to 6
let b = (Math.floor(Math.random()*6+1));
console.log(b);

//To get two random dice numbers and add it
let c = (Math.floor(Math.random()*6+1));
let d = (Math.floor(Math.random()*6+1));
let f = c+d;
console.log(f);

//To get 5 two digit random numbers

let number1 = Math.floor(Math.random() * 90 + 10);
let number2 = Math.floor(Math.random() * 90 + 10);
let number3 = Math.floor(Math.random() * 90 + 10);
let number4 = Math.floor(Math.random() * 90 + 10);
let number5 = Math.floor(Math.random() * 90 + 10);

console.log(number1+number2+number3+number4+number5);
console.log((number1+number2+number3+number4+number5)/5);

//To convert units and find area
//Convert unit
let area1 = 42/12;
console.log(area1+" ft");

//Rectangular Area of plot
let area2 = 60*40;
let area = area2/3.28;
console.log(area+" meters");

//Area of 25 plots
let area3 = (area*25)/4046.9;
console.log(area2+" acres");

