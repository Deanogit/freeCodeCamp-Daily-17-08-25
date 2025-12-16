// Targeted Sum
// Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

// The returned array should have the indices in ascending order.

// function findTarget(arr, target) {
// console.log(arr, target)
// loop through arr

//for (let i = 0; i <= arr.length -1 ; i ++) {
//  console.log(arr[i])
// }

// arr.forEach((x,i) => {
//   console.log(x, i)
//   if (arr[i] + arr[i + 1] === target) {
//     console.log("Match!")
//     return [i, i + 1]
//   } else {
//     return "Target not found"
//   }
// })
// check if a + b = target
// // return indicies of a & b
// return arr;
//}

function findTarget(arr, target) {
  const result = [];
  console.log(arr, target);
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let x = i + 1; x <= arr.length - 1; x++) {
      // console.log(i, x)
      console.log(arr[i], arr[x]);
      if (arr[i] + arr[x] === target) {
        console.log('Match!');
        result.push(i, x);
        return result;
      }
    }
  }
  console.log(result);
  return 'Target not found';
}
