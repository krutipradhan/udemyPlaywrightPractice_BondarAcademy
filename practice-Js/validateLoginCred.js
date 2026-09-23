const credenatials = [
    {username:"admin",password:"admin123"},
    {username:"user",password:"user123"},
    {username:"kp",password:"kp@123"},
    {username:"ksp",password:"ksp@900"}
]
function validateCred(uname, passwd){
    if(credenatials.find(cred =>cred.username === uname && cred.password ===passwd)){
        return true
    }
    return false
}

console.log(validateCred('kp','kp@123'))