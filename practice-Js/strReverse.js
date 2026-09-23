function revString(str){

    let len = str.length
    let str2 = ''
    for(let i=len-1;i>=0;i--){
        str2 +=str[i]
    }   
    return str2
}
console.log(revString("playwright"))
