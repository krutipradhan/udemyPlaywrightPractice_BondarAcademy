let str = 'FAIL|PASS|FAIL|PASS|PASS|PASS|FAIL|PASS'
let strSplit = str.split('|')
console.log(strSplit)

function countStatus(strSplit){
    let pCount = 0
    let fCount = 0 

    for(let words of strSplit){
    if(words ==='PASS')
         pCount += 1
    else
        fCount += 1
}
console.log('Pass Count is ' + pCount, 'and Fail Count is ' + fCount)
let totalCount = pCount + fCount
const passPercentage = (pCount/totalCount)*100
const failPercentage = (fCount/totalCount)*100

console.log ('Report : Pass Percentage is ' + 
    passPercentage + '%', 'Fail Percentage is ' + 
    failPercentage + '%')
}
function consecutiveFail(strSplit){
    let maxConsecutiveFail = 0
    let currentFail = 0

    for(let words of strSplit){
        if(words === 'FAIL'){
            currentFail+= 1
            if(currentFail > maxConsecutiveFail)
                maxConsecutiveFail = currentFail
        } else {
            currentFail = 0
        }
    }
    console.log('Max Consecutive Fails: ' + maxConsecutiveFail)
}
countStatus(strSplit)
consecutiveFail(strSplit)



