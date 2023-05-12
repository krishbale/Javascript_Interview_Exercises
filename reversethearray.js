function reverseArray(arr){
//    return arr.reverse();
for(let i=0;i<arr.length/2;i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-i-1]
    arr[arr.length-i-1] = temp

}
return arr;

}
let arr = ["Apple","ball","Cat","dog"]
console.log(reverseArray(arr))