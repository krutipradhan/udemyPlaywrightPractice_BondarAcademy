function duplicateValue(arr){

    let arr2 =[]
    let size= arr.length
    for(let i=0;i<size;i++){
        for(let j=i+1;j>size;j++){
            if(arr[i]==arr[j] && !arr2.includes(arr[i])){
                arr2.push(arr[i])
        }
    }
}
    return arr2
}

console.log(duplicateValue([1,2,3,4,5,6,7,8,4,10,1]))