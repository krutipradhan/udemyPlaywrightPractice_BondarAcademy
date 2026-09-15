
let person = {name: "kruti",
    age : 33,
    address : "Bangalore"
};

let comp ={
    name: "PSL",
    loc:'BLR',
    dept :{
        tech :{
            head:"Eng",
            manager:"Nag"
        },
        hr :{
            head : "King",
            manager : "smith"
        }
    }
}
console.log(comp.name)
console.log(comp.dept)
console.log(comp.dept.hr.manager)


console.log(person)
console.log(person.age)
console.log(person.address)

person.age = 34
person.nationality = 'Indian'

console.log(person)
console.log(person.age)
console.log(person["address"])
console.log(typeof person)