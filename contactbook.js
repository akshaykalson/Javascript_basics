

var contacts = [
    {
        "firstname":"akshay",
        "lastname":"kalson",
        "number": "9463604486"

    },

    {
        "firstname":"Kanta",
        "lastname":"Devi",
        "number": "9416912007"   

    }

]

function findContact(arr, fname, prop){
    for(var i=0; i<arr.length; i++){
        if (fname== arr[i]["firstname"]){
            return arr[i][prop] 

        }
        else
        {

            return "No such Contact"
        }


    }
}

console.log(findContact(contacts, "akshay", "number"))
console.log(Math.random())




