function findEvenNumbers(arr){
    let arr2 =[]
    for(let i=0;i<=arr.length;i++){
        if(arr[i]%2==0){
            arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(findEvenNumbers([9,23,17,34,12,6]))