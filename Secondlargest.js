function secondhighest(){
    let arr = [ 5,454,34,46,76,343,34]
    let lowest = arr.sort(function(a,b){ return a-b});
    let highest = arr[arr.length-1]
    for(let i=0;i<arr.length;i++){
        if(highest<arr[i]){
            let secondhighest = arr[i];
            return secondhighest
        }
        return arr[arr.length-2];
    }
}
    
    //

console.log(secondhighest())