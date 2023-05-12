function calulatevowel(s) {
    let consonantcount = 0;
    let vowelcount = 0;
   let string =  s.toLowerCase()
//    console.log(string);
    for(let i = 0 ; i<s.length;i++){
        let c = string.charAt(i);

       if(c==='a'|| c ==='e'|| c ==='i'|| c ==="o" || c ==='u'){
        vowelcount ++;


    


       }else if(c !==' '){
        consonantcount ++;
        
       }
       
    }
  
    return {
        "vowelcount" : vowelcount,
        "consonantcount":consonantcount,
        "total numbers":vowelcount+consonantcount

    };
}

 console.log(calulatevowel("A Quick Brown fox jumps over the lazy dog"));