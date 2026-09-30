const num =[10,20,30,80,50]
const [first,third,second] = num
//console.log(first,second, third)

const user ={pname :"KP",pdept :"IT", plocation :"BBSR"}
const{pdept,pname,plocation} = user
console.log(pname,pdept,plocation)

const{pname:uname,pdept:udept,plocation:ulocation} = user
console.log(udept, uname, ulocation)

const colors =["red","green","blue"]
const[,,c] = colors
console.log(c)

let x = "kp";
let y = "pp";
[x,y] = [y,x]
console.log(x,y)

//...restOf
let mic = {a : 10, b: -18, c:45, d:23}
let{a,...restOfmic} = mic
console.log(a,restOfmic)

const[wow,...restOfcolors]=colors
console.log(wow,restOfcolors)




