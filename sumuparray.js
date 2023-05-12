function sumuparray(n){
    let sum = 0;
    for(let i = 0 ; i<n.length;i++){
        sum += n[i]
    }
    return sum
}
let n = [1,2,3,4,5,6,7,8,9]
console.log(sumuparray(n))