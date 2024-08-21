const stats = {

    min: 43,
    max: 50,
    median:20,
    mode:30

}

function extractMaxMin({max, min}) {  //i have placed here curly braces to access max and min of stats object

    return max+min

}


console.log(extractMaxMin(stats)) // even if we pass entire stats object to the function, it will only access max and min



