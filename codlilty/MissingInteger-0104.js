const A = [1, 2, 3];

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

function solution(A) {
  let arr = new Set(A);
  let setArr = [...arr].sort((a, b) => a - b);
  console.log(setArr);

  if (Math.max(...setArr) < 0) {
    return 1;
  }

  if (setArr.length == Math.max(...setArr)) {
    return setArr.length + 1;
  }

  for (e in setArr) {
    let index = parseInt(e) + 1;
    if (setArr[e] != index) {
      return index;
    }
  }

}

function solution2(A) {
  A.sort((a, b) => a - b);

  let min = 1;

  for (let i in A) {
    if (A[i] > 0 && A[i] == min) {
      min++;
    }
  }
  return min;
}

console.log(solution2(A));
// console.log(solution(A));
