const  firstName = "eman"
const  lastName = "mohamed"
const  city = "banisuaf"
const  age = 21

// module.exports = firstName
// module.exports = lastName
// module.exports = city

function Mul(x,y){
    console.log(x*y)
}

module.exports = {
    fname : firstName,
    lname : lastName,
    city : city,
    age : age,
    fun1 : Mul
}