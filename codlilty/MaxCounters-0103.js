const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];

function solution(N, A) {

  let arr = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {

    if (A[i] < N + 1) {
      arr[A[i] - 1] += 1;
    } else {
      arr.fill(Math.max(...arr));
    }
  }
  return arr;
}

function solution2(N, A) {
  let counters = Array(N).fill(0);
  let maxCounter = 0;
  let maxToSet = 0;

  for (number of A) {
    if (number === N + 1) {
      maxToSet = maxCounter;

    } else {
      const index = number - 1;
      counters[index] = Math.max(counters[index] + 1, maxToSet + 1);
      maxCounter = Math.max(counters[index], maxCounter);
    }
  }
  counters = counters.map(value => Math.max(value, maxToSet));
  return counters;
}





console.log(solution2(N, A));
// console.log(`3, 2, 2, 4, 2`);