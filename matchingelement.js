

function matchingelement (arrayA){
    let matchingelement = []
    for(let i = 0 ;i < arrayA.length ; i++){
        for ( let j = i+1 ;j<arrayA.length ;j++ ){
            if(arrayA[i] === arrayA[j]){
                matchingelement.push(arrayA[i])
            }
        }
    }

return matchingelement
}
arrayA = [ 1, 1, 2, 3, 4, 5, 3, 4, 2, 3,]
console.log(matchingelement(arrayA))