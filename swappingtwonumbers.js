function swapnum( a,b){
    b = a + b;
    a =b-a;
    b = b-a;
    return {
        "a":a,
        "b":b
    }
}
console.log(swapnum(2,3))