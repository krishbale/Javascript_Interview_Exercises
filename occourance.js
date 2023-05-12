function countoccourance(a,string){
    let count = 0
    for(let i = 0; i<string.length;i++){
        if(string.charAt(i) === a){
            count++;
        }
    }
    return count;
}
console.log(countoccourance('a',"aeroplane"))
