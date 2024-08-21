function testEqual(val){
    if (val === 12){     //== does type conversion , === does not , so  12 is not equal to string '12'
        return "equal"
    }
    else{

        return "Not Equal"
    }

}

console.log(testEqual(13))




