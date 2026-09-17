
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

let library ={
    name: "city lib",
    location: "downtown",
    books:[
        {
            title : "who am i",
            author : "ksp",
            price : 320
        },
        {
            title : "jva script",
            author: "kp",
            price :500
        }
        
    ]
};

console.log(library)
console.log(library.books[1].price)
console.log(library.books[0])
console.log(library.books[0].author)






console.log(person)
console.log(person.age)
console.log(person.address)

person.age = 34
person.nationality = 'Indian'

console.log(person)
console.log(person.age)
console.log(person["address"])
console.log(typeof person)