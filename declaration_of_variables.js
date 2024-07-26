function checkScope(){
    let i = "global scope" //this value of i is accessible globally within this function only, i cant access it outside this function
    var j = "declared using j" // i can access this j anywhere within the function
    if(true){
        let i = "block scope"
        console.log(i) // this value of i is only accessible within this if statement

    }
    console.log(i)
    return i
}

checkScope()

// console.log("trying to access i outside", i) // this will not work, since i is declared using let keyword

// console.log(j) // but i cant access j here, or i for that matter, its outside the function


