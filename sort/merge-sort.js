// Merge Sort
const mergeSort = function (array) {
  if (array.length < 2) return array;
  let pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  console.log(`left: ${left}, right: ${right}`);

  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  console.log(`result: ${result}`)
  return result;
}

const list = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(list));