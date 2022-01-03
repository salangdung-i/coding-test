// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // 1. 이진수로 바꾸기 
  let num = N;
  let binary = (num).toString(2);
  console.log(binary);
  // console.log(binary.length);

  //2. 0 gap
  let arr = new Array();
  let index = 0;

  for (let i = 0; i < binary.length; i++) {
    console.log(`${i}: ${binary[i]}`);

    let count = 0;
    if (binary[i] == 1) {
      arr[index] = count;
      console.log(arr);
      // index++;
    } else {
      count++;
      console.log(count);
    }
    // console.log(arr);
  }




}


const N = 1041;
solution(N);
