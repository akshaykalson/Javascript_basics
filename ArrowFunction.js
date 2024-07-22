var myFunction = (arr1, arr2) => arr1.concat(arr2)

console.log(myFunction([1,2], [3,4]))

// this function is called arrow function, it is super quick to write one liner function

//lets test more arrow functions

const arr1 = [-1,-5,3,4,5.5,7.9,4,3,-6]

filterArr = arr1.filter(num => Number.isInteger(num) && num>0).map(x => x*x) // this is a arrow funtion that returns only positive integers in array and squares them
//we used filter and map functions here

console.log(filterArr)

