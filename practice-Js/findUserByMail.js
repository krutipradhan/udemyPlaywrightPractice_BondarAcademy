const users =[{
    name : "KP", email : 'kp@gmail.com',
    name : 'SP', email : 'sp@gmail.com',
    name : 'MP', email : 'mp@gmail.com'
}]

function findUsers(users,emailName){
    for(const user of users)
    if(user.email === emailName)
        return user.name
}

console.log(findUsers(users,'mp@gmail.com'))