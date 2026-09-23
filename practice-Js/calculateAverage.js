function findAverage(arrayOfNumbers){
    let sum =0
    let size = arrayOfNumbers.length
    for (let i=0;i<size;i++){
        sum+=arrayOfNumbers[i]
    }
    return sum/size
}
console.log(findAverage([12,9,3,6,16,23]))
console.log(findAverage([10,20,30,40]))