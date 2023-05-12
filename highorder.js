function highorder2 (){
    return function(){
        return 'Do something';
    }
    // fn();
}
let x = highorder2();
console.log(x());
// highorder(function() {console.log("Hello world")})
