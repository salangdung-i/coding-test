const A = [3, 1, 2, 4, 3];

function solution(A) {
  let arr1 = new Array();
  let arr2 = new Array();
  let p = new Array();

  for (let i = 1; i < A.length; i++) {

    arr1 = A.slice(0, i);
    arr2 = A.slice(i);

    let result = Math.abs(arr1.reduce((acc, arr) => acc + arr) - arr2.reduce((acc, arr) => acc + arr));

    p.push(result);
  }
  return Math.min(...p);
}

function solution2(A) {
  const N = A.length;
  const totalSum = A.reduce((a, b) => a + b);
  let rightSum = totalSum - A[0];
  let leftSum = A[0];

  let diff;
  let minDiff = 0;


  for (let P = 1; P < N; P++) {
    diff = Math.abs(leftSum - rightSum);
    if (diff < minDiff) {
      minDiff = diff;
    }

    leftSum += A[P];
    rightSum -= A[P];
  }

  return minDiff;
}

// console.log(solution(A));

console.log(solution2(A));