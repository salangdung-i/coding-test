// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // 1. 이진수로 바꾸기 
  let num = N;
  let binary = (num).toString(2);
  console.log(binary);

  //2. 0 gap
  let arr = new Array();
  let index = 0;
  let count = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == '1') {
      arr[index] = count;
      count = 0;
      index++;
    } else {
      count++;
    }
  }
  return Math.max.apply(null, arr);
}

function solution2(N) {
  let binary = N.toString(2);
  let trimmed = binary.substr(0, binary.lastIndexOf('1') + 1);
  return Math.max(...(trimmed.split('1').map(item => item.length)));
}


const N = 1041;
solution(N);
solution2(N);

