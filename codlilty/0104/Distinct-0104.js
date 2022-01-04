// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const A = [2, 1, 1, 2, 3, 1];
function solution(A) {
  let set = new Set(A);
  return set.size;

}

console.log(solution(A));
