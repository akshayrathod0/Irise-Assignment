
function countEvenOdd(arr){  // count even odd number
    let evenCounts = 0;
    let oddCount = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            evenCounts++;
        } else {
            oddCount++;
        }
    }
    console.log((evenCounts) + " total even nuber in array ");
    console.log((oddCount) + " total odd number in array ");
}
var arr = [10, 12, 15, 4, 9, 20, 19, 60, 80, 75];
countEvenOdd(arr);

function targetSum(arr, target){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]+arr[j] == target) {
                console.log(i,j);
            }
        }
    }
}
targetSum(arr, 30);
