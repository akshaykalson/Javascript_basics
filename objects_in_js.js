var testObject = {
    "hat": "ballcap",
    "pants": "loose",
    "tshirt": "brown"
}
console.log(testObject.tshirt)

//these objects are like dictionaries

testObject.hat = "blackhat"

console.log(testObject.hat)


//we can  also delete a property from an object, like

delete testObject.pants

console.log(testObject) //pants is deleted

//we can use objects for lookups also, we dont need to use switch statement then
function lookup(val){
    var result = "";
    switch(val) {
        case "alpha":
        result = "adam"
        break;
    
        case "beta":
        result = 'swing'
        break;
    
    
    }
    return result
}

console.log(lookup("alpha"))

//we can reduce this entire switch statement to a object

var switchStatementReplacement = {
    "alpha" : "adam",
    "beta" : "swing"

}

console.log("The replacement for switch statement output is", switchStatementReplacement.beta)

