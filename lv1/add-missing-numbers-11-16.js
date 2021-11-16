function solution(numbers) {
  var answer = -1;
  const exitNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let correct = [];
  let index;

  for (let i = 0; i < numbers.length; i++) {
    index = exitNumbers.indexOf(numbers[i]);
    correct = exitNumbers.splice(index, 1);
  }


  console.log(exitNumbers);
  console.log(typeof (answer));

  exitNumbers.forEach(e => answer += e);
  console.log(answer);
  return answer;
}




const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
solution(numbers);
console.log('result : 14');

