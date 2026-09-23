function valueExist(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            console.log("Value Exist at index " + i)
        }
        else
            continue
    }
}
valueExist([12,45,48,23,61,45,34],45)