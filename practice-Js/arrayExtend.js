let ip = ["kp","ap","mp","up"]
console.log(ip)
console.log(ip.length)

console.log(ip[2])
ip.splice(2,1,"np")
console.log(ip)
ip.splice(1,1,"sp")

console.log(ip)

ip.splice(3,2,"lp","qp")
console.log(ip)
console.log(ip.length)

let newip=ip.slice(1,3)
console.log(newip)
console.log(ip)
