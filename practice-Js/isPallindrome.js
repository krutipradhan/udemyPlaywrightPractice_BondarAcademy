function isPallindrome(str){

    let size= str.length
    for(let i=0;i<size/2;i++){
        if(str[i]!= str[size-1-i])     
            return false
    }
    return true
}
console.log(isPallindrome("racecar"))
console.log(isPallindrome("Javascript"))