// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [3, 8, 9, 7, 6];
const K = 3;

function solution(A, K) {
  let legnthA = A.length;
  let index = K;

  while (index > 0) {
    A.unshift('x');
    index--;
  }

  let sliceArr = A.splice(legnthA);

  for (let i = sliceArr.length; i > 0; i--) {
    A.unshift(sliceArr[i - 1]);
  }

  return A.filter(item => item !== 'x');
}

function solution2(A, K) {

  let rotationNum = (K > A.length) ? (K % A.length) : K;
  return rotationNum === 0 ? A : [].concat(A.slice(-rotationNum), A.slice(0, A.length - rotationNum))
}


console.log(solution(A, K));
console.log(solution2(A, K));