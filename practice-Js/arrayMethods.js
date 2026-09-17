
let city =["bbs","blr","hyd","pun","afg"]
let cityNew = city.slice(-3,-1)
//console.log(cityNew)

console.log(city.reverse())
console.log(city.sort())

let names =["1","2","3"]
let newData=city.concat(names)
//console.log(newData)

const value=newData.indexOf("blr")
console.log(value)

let avail =newData.includes("pun")
console.log(avail)

city.forEach(cit=>console.log(cit))

let numbers =[1,4,8,10,15]
let outpt = numbers.map(num =>num%2)
console.log(outpt)

let usernames =["user1","user2"]
let newUsname = usernames.map(u=>({username:u,password:"test@123"}))
console.log(newUsname)

let evenNum = numbers.filter(num=>num%2===0)
console.log(evenNum)

let results =[{tcId:1, status:"FAIL"},{tcId:2, status:"PASS"}]
let failTC = results.filter(r=>r.status==="FAIL")
console.log(failTC)

let sum = numbers.reduce((acc,num)=>acc+num,0)
console.log(sum)

let state =["pass","fail","fail","fail"]
let countSt = state.reduce((acc,st)=>st==="fail" ? acc+1 : acc,0)
console.log(countSt)

let checkG = numbers.find(num=>num>4)
let checkState = state.find(st=>st==="fail")
console.log(checkG)
console.log(checkState)


let indFind = numbers.findIndex(num=>num>10)
console.log(indFind)
let indFindstate = state.findIndex(st=>st==='fail')
console.log(indFindstate)

console.log(numbers.sort())
console.log(numbers.reverse())


