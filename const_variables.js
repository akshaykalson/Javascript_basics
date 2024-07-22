const SENTENCE = "I love js"

console.log(SENTENCE)

// SENTENCE = " I dont love JS" //this will result in error since i cant reassign a variable assigned with const keyword

const array = [2,5,7]

function editArray(){
    // array = [3,4,9] // this will not work, we cannot reassign an array declared with const keyword

    //but we can change this array using bracket notation

    array[0]=3
    array[2]=9

    console.log(array)

}

editArray()

//since const keyword also cannot make sure that no data manipulation on our variable is done
//we have to use variable freezing

const math_constant = {
    PI: 3.14


}

Object.freeze(math_constant)

math_constant.PI = 10


testvar = math_constant.PI

console.log(testvar)

//we have frozen the value of the obejct

