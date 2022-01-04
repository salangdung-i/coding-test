// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [4, 1, 3, 2];
function solution(A) {
  let arr = new Set(A);

  if (arr.size == Math.max(...A)) {
    return 1;
  }
  return 0;

}

function solution2(A) {
  A.sort((a, b) => a - b);

  if (A[0] !== 1) {
    return 0;
  }


  for (let i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] != 1) {
      return 0;
    }
  }

  return 1;

}
// console.log(solution(A));
console.log(solution2(A));

