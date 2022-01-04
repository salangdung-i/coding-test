// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [4, 3, 2, 1, 5];
const B = [0, 1, 0, 0, 0];

function solution(A, B) {
  let bottom = new Array();
  let top = new Array();
  let bottomMax, topMax;

  for (let i = 0; i < B.length; i++) {
    if (B[i] == 0) {
      bottom.push(A[i]);
    } else {
      top.push(A[i]);
    }
  }

  bottomMax = Math.max(...bottom);
  topMax = Math.max(...top);

  if (bottomMax > topMax) {
    return bottom.filter(e => e > topMax).length;
  } else {
    return top.filter(e => e > bottomMax).length;
  }
}

function solution2(A, B) {
  const N = A.length;
  let alive = [];
  alive.push(0);

  let i = 1;
  while (i < N) {
    if (B[i] == 0 && B[alive[alive.length - 1]] == 1) {
      if (A[i] > A[alive[alive.length - 1]]) {
        alive.pop();
      }
      else {
        i++;
      }
    }
    else {
      alive.push(i);
      i++;
    }
    console.log(alive);
  }
  return alive.length;

}

// console.log(solution(A, B));
console.log(solution2(A, B));
