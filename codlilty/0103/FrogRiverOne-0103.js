
const X = 5;
const A = [1, 3, 1, 4, 2, 3, 5, 4];

function solution(X, A) {
  let arr = new Array();


  for (let j = 0; j < A.length; j++) {
    for (let i = 1; i < X + 1; i++) {
      if (i == A[j]) {
        arr[i - 1] = A[j];
      }
      if (arr.length == X) {
        return j;
      }
    }
  }

  return -1;
}

function solution2(X, A) {
  let leg = new Set();

  for (let i = 0; i < A.length; i++) {

    leg.add(A[i]);
    if (leg.size == X) {
      return i;
    }
  }
  return -1;

}

// console.log(solution(X, A));
console.log(solution2(X, A));