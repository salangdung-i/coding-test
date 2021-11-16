function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}




const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
solution(numbers);
console.log('result : 14');

