//#Primitive 
// 7 types : String, Number, Boolean, null, undefined, symbol, Bigint

const score= 100
const scoreValue= 100.3
const bigNumber = 858585858585858585696555n
const isLoggedIn = false
const OutsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID);


//Non-Primtitive/ Reference type

//Array, Objects, Functions , Date

const heros = ["captain", "ironman"]
let myobj={
    name: "sneha",
    age: 25,
}

const myfunction =  function(){
  console.log("hi");
  
}

console.log(typeof myfunction);
