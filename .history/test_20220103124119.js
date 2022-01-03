// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // 1. 이진수로 바꾸기 
  let num = N;
  let binary = (num % 2).toString();
  console.log(binary);

  for (; num > 1;) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  // 2. 0 gap 담기 

}


const N = 1041;
solution(N);
