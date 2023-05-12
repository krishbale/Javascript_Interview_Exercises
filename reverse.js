let  hello = 'hello';
let reverse = '';
let length = hello.length
// console.log(length);
for (let i = 0 ;i <length;i++) {
    reverse =  hello.charAt(i) + reverse
    console.log(reverse);
}
// console.log(reverse)