// 피봇 하나를 정해서 피봇을 기준으로 큰것은 오른쪽 작은것은 왼쪽으로 정렬한다.
// 정렬된것에서 피폿을 정해서 위의 과정을 반복한다. 


const list = [55, 80, 30, 90, 40, 50, 70];
function quickSort(array) {
  if (array.length < 2) return array;

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }

  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(list));