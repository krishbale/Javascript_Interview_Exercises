function bubblesort (arr){

    //defeniton Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing
        for(let i = 0;i<arr.length;i++){
            for(j = 0;j<(arr.length-i-1);j++){
                if(arr[j]> arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }

            }
        }
        console.log(arr)
}
let arr= [ 4,5,6,7,4,2,3];
console.log(bubblesort(arr));
