
function sumOfNumbers(n){
    //const result = n*(n+1)/2
    let result = 0
    for(let i =1; i<=n;i++){
         result = result+i;
    }
    console.log(result)
}
sumOfNumbers(15)

function factN(n){
    if(n==0  || n==1){
        console.log(1)
    } 
    else{
        var facto=1
        for(let i=n;i>=1;i--){
        var facto=facto*i
        }
    }
    console.log(facto)  
}
factN(4)

function isPrime(n){
    var flag =0
    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=flag+1
            break
        }
    }
    if(flag==1){
        console.log('Not Prime')
    }
    else
        console.log( 'Prime')
}
isPrime(41)