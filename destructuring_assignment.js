const local_forecast = {

    today:{min: 20, max: 33},
    tomorrow:{min: 30, max:40}    //a nested object

}


function getMaxOfTomorrow(objectname) {

    const {tomorrow: {max: maximumtemp}} = objectname   // assigning value from an object to a const variable
    return maximumtemp


}

console.log(getMaxOfTomorrow(local_forecast))


const [x,y,,z]= [1,2,3,4] // to escape a place in array assignment, we have to use comma

console.log(x,y,z)


// now we take a look at rest operator


function assignValue(array){

    const [ , , ...arr] = array //this tripple dot is called rest operator, it means everything else
    return arr

}


console.log(assignValue([1,2,3,4,5,6])) 

