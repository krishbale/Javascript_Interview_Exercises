function reverseString(s){
    let reverse ="";
   for(let i=0;i<s.length;i++){
    reverse = s.charAt(i) + reverse;

   }
    return  reverse  ;
}
// console.log(reverseString("apple"))
 
function checkpalindrome(s){
   let left = 0;
  let  right = s.length-1;
 while(left<right){


    if(s[left]!= s[right]){
        return false;
    }
    left++;
    right--;


 }
 return true;

}
console.log(checkpalindrome("hanah"))