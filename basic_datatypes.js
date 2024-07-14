console.log("First program");
var number = 5    // in line comment
/* trying
the 
multi line comment */

// The various datatypes in JS

var myName = 'Akshay'
console.log(myName)
myName = 8   //a VAR objects values can be changed again
console.log(myName)

// there are other ways also to declare variables
 
let ourName = 'Akshay'
console.log(ourName)
const hi = 3.14 // now i cant reassign this variable to any other value, its fixed
console.log(hi) 

var a // this is just declaring a variable

var b =20 //this is declaring the variable as well as initializing it

var c = ' My name is '

var d = c + 'Akshay'  // we can add string to another string

console.log(d)

// javascript is case sensitive language

var myVar = 20

myVar++
console.log(myVar)
myVar--
console.log(myVar)

//remainders in javascript

var remainder = 11 % 3
console.log('The remainder is ', remainder)

//how to escape a quote symbol in JS

var myString = "Money said, \"He will not do this job\"  "    //this was we can make js ignore the quotes inside a text

console.log(myString)

// we can also do it this way, we can use single quote on outside of sentence and use quotes in between

var sentence = 'My name is "Akshay" '
console.log(sentence)
var sentenceQuote = `"My name is 'Akshay'"`    //by using this backtick, we can use both kind of quotation marks in sentence

console.log(sentenceQuote)

var testsentence = "I have a good \n day \n today"

console.log(testsentence)
console.log(testsentence[0])

//immutability of strings

/*
var myStr = 'Jello world'
myStr[0]= 'h'
this code will not work because we cannot change parts of a string, we can change contents of entire string
*/






