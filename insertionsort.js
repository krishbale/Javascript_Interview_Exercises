function insertionsort (arr){
    let i ,j,key ;
    n = arr.length;
for ( i = 0;i<n;i++){
  key = arr[i];
    j = i-1;
    while(j>= 0 && arr[j] < key ){
        arr[j+1] = arr[j];
        j= j-1;
    }
    arr[j+1] = key;
    

}
    return arr
}
let arr = [1,9,8,3,4,5,6,7,8,3,]
console.log(insertionsort(arr));