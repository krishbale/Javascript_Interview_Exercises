function checkanagrms (stringa,stringb){
   

if(
stringa.length !== stringb.length){
    return false
} else  {
    let sorteda = [...stringa].sort().toString();
    let sortedb = [...stringb].sort().toString();

  if(sorteda!==sortedb){
    return false
  }

}
return true;
}
console.log(checkanagrms('secure','rescue'))