//var car = 5; the var can be accessed anywhere and can be changed any time
//let car = 5; the let can be only accessed depends where it's placed like a country you cant use a car in japan while ur in lebanon and can be changed
//const car =5;  the const can be only accessed depends where it's placed and cannot be changed
// preferably use let and const and use var only on specific times

//create list use [] and for inner list [ {},{}]
// inside the inner string use {id:3 not id = 3}
// use "  ;  " semicolm after a statement 

//A function is a container that contains multiple steps that acts as a algorithm
// and will not get excuted untill we call them and like math. method it is there so we dont re-invent the wheel
//function myfunction() {
//let a = 55;
// console.log(a);
//}
 
// == != || && is normal if 2 var has the same value
// === !== is to return true or false if the typeof is right
//console.log(3==3) true
//console.log(3 =='3') true
//console.log(typeof '3') string
//console.log(3==='3') false, cause number != string


// / * + - % (**)exponential. mathmatical arethmatics 
// ++ -- increment and decrement
// console.log(5 ** 5); 

//const snake = 5;
//console.log(Math.exp(snake));
// (Math." ") it helps in using mathmatical operation build in js

//above is videos from recording (1 - 6)               
//"~~~~~~~~~~~~!!"

//const b = 5;
//const a = b ;
//a=b; means assign the value in b into a different then normal math
//a=b --> assign b to a
//a==b --> compare a to b
//a+=b --> a= a+b
//a-=b --> a= a-b
//a/=b --> a = a/b
//a*=b --> a = a*b
//a%=b --> a = a%b

// string can be used in '' / "" / (``) to insert ${variables} to print out
// const str = "Loba ass";
//const str = 'Loba "ass"' returns ass : Loba "ass"
// OR "Loba \"ass\"" OR 'Loba \'ass\'' (use '' better for visualization)
//str.length returns the size of the string

//slice func is like extracting only the needed parts
//const text = "nigga, niggatron, michealaoun";
//let partStr = text.slice(7,16);
//console.log(partStr); returns niggatron
//part=text.slice(-16); returns tron, michealaoun it counts backwards

//subString number is like slice but it doesn't accept negative num
//const text="Loba ass, nigga, niggatron"
//let part = text.substring(7,16)
//console.log(part) returns s, nigga,

//substr is almost similar to subStrting but the main diff is that
// (start postion, how many characters you want)
//const text="Loba ass, nigga, niggatron"
//let part = text.substr(10,5)
//console.log(part) returns nigga

//replace func replaces specified value with another that first enters 
//const text = ("lobba bad");
//let newT = text.replace("bad","Sexy and hot");
//console.log(newT)

//replaceAll func replaces also specified value but all with the same value
//const text = ("lobba bad and bad");
//let nt = text.replaceAll("bad","hot");
//console.log(nt);

//upper case and lowercase 
// local upper and lower case
//const text="Nigga";
//console.log(text.toUpperCase());
//console.log(text.toLowerCase());
//console.log(text.toLocaleLowerCase());

//concat is to combine to variables
//let part1 = 'nigga';
//let part2='loba'
//console.log(part2.concat(" ass ",part1)); returns loba ass nigga

//trim to remove the extra spaces
//let password="     I     love  loba";
//let newpass = password.trim();
//console.log(password)
//console.log(newpass)

// recording from 7-9
//-----------!!!!!!!!!0----------------

//Traditional vs arrow functions

//Function
/*function helloWorld(){
    console.log("Welcome Nigga")
}
helloWorld();*/

/*function addNumber(a,b){
    return a+b;
}
console.log(addNumber(1,9));*/

//Arrow Function

/*let addNumber = (a,b) =>{ 
    return a+b;
}
OR
let addNumb = (a,b) => a+b;
console.log(addNumb(69,67));    

let gay = name => console.log("Hello gay +"+name);
*/

// class test
/*class Car {
  constructor(model){
    this.model=model;
  }
  display_arrowVersion(){
    setTimeout( ()=>{  // anonymous func
        console.log("car model: "+ this.model+" _arrowVersion");
        
    },100)

  }

  display_functionVersion(){
    setTimeout(function(){
        console.log("car model: "+ this.model+" _funcVersion");
    },100)
  }
}

let car = new Car("Bmw gay");
car.display_arrowVersion(); // displays normally
car.display_functionVersion();  // doesn't displays cause
//this.model will be resigned
*/ 

//that's why arrow func is > normal func 

