// Modules 
//1- core modules  

 const  fs = require ("fs")

 fs.writeFileSync("data1.txt" , "eman mohamed")

//  console.log(fs.readFileSync("data1.txt").toString())

 fs.appendFileSync("data1.txt" , " , heba mohamed" )

//  console.log(fs.readFileSync("data1.txt").toString())

 ///////////////////////////////////////////////////////////////////////////////////////

  const x =  require ("./allData")
//   console.log(x.fun1(9,8))
//   console.log(x.lname)
//   console.log(x.age)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

  // NPM   Node package manager 

  const validator = require("validator")
   
//   console.log(validator.isEmail("eman"))
//   console.log(validator.isEmail("eman@gmail.com"))

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

//   process.argv   [    ,   ]

// console.log(process.argv)


// const command1 = process.argv[2]

// if (command1 === "add"){
//     console.log("you added an item")
// } else if (command1 === "delete"){
//     console.log("you deleted an item")
// } else {
//     console.log("ERROR")
// }

// node app.js  --key="value"


/////////////////////////////////////////////////////////////////////////

// yargs : parsing 

 const yargs = require("yargs")

//  console.log(yargs.argv)



//  yargs.command({
//     command : "add",
//     describe: "to add an item",
//     builder: {
//         fname : {
//             describe: "adding the first name ",
//             demandOption: true,
//             type: "string"
//         },
//         lname : {
//             describe: "adding the last name ",
//             demandOption: true,
//             type: "string"
//         }
//     },
//     handler: ()=> {
//         console.log("you have already added the item")
//     }
//  })

//  yargs.command({
//     command : "delete",
//     describe: "to delete an item",
//     handler: ()=> {
//         console.log("you have already deleted the item")
//     }
//  })




// builder  : options that command deal with 

////////////////////////////////////////////////////////////////////////////////////

//  const person1 = {
//     fname: "eman",
//     lname: "mohamed"
//  }

//  console.log(person1)
//  console.log(person1.lname)

//  const person1Json = JSON.stringify(person1)
//  console.log(person1Json)

// //  console.log(person1Json.lname)

// const person1Obj = JSON.parse(person1Json)
// console.log(person1Obj)


// // const fs = require("fs")

// fs.writeFileSync("data.json" , person1Json)
////////////////////////////////////////////////////////////////////////////////////
  
const data10 = require ("./data10")

yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        // console.log("you have already added the item")
        data10.addPerson(x.fname , x.lname , x.city , x.age , x.id )
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        // console.log("you have already deleted the item")
        data10.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data10.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data10.listData()
    }
 })
 
//  console.log(yargs.argv)
yargs.parse() 
   
  



