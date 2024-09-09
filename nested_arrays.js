function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb

    return result

}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

//arrays in JS

var myArray = ['Akshay', 'is', 28]    //arrays can have multiple datatype objects in them

console.log(myArray[0])  //how we can access the values stored in an array

//nested arrays in JS

var array1 = [['blue', 'car', 21], ['red', 89, 'fox']]

console.log(array1[1][0])    //this is how we can access a nested array

//changing the values inside an array

var array2 = [21, 67, 99]
console.log("The array without changes is ", array2)
//now we will change the second number to 91

array2[1]= 91
console.log("The array after changes is ", array2)

//push function in array, used to append 

array2.push('happy', 'sad')

console.log("The array after pushing is ", array2)


//pop is used to delete
array2.pop()
console.log("The array after popping is ", array2)

//shift function deletes first element instead of last

array2.shift()
console.log("The array after shifting is ", array2)

//unshift function adds elements at start of the array

array2.unshift('dracula')
console.log("The array after un-shifting is ", array2)



