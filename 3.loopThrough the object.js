// const person={
//     "firstName":"Laurence",
//     "lastName":"Svekis",
//     "X1":1,
//     "x2":false,
//     "interest":["JavaScript","HTML","CSS"],
//     "Course":{
//         "name":"Java Script","length":15
//     }
// }
// console.log(person.Course)
// console.log(person.Course.length)

// console.log(person["Course"]["length"])


//more complex objects
const person={
    "firstName":"Laurence",
    "lastName":"Svekis",
    "X1":1,
    "x2":false,
    "interest":["JavaScript","HTML","CSS"],
    "Course":[{
        "name":"Java Script","length":15
    },{
        "name":"HTML",
        "length":10
    },{
        "name":"CSS",
        "length":20
    }]
}

console.log(person.Course);

// for (var i in person.Course){
//     console.log(person.Course[i].name)
// }


//or we use forEach() loop

var courses=person.Course;

courses.forEach((Course,index)=>{
    console.log(Course)
    console.log(Course.name)
    
})

