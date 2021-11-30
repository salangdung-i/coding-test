function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = [];
    temp = array.slice(commands[i][0] - 1, commands[i][1]);
    temp.sort((a, b) => a - b)
    answer.push(temp[commands[i][2] - 1]);
  }
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

solution1(array, commands);
console.log('result : [5, 6, 3]');


function solution1(array, commands) {
  return console.log(commands.map(command => {
    const [sPosition, ePosition, position] = command;

    const newArray = array
      .filter((_, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
      .sort((a, b) => a - b);
    // fIndex => 처리할 현재요소의 인텍스 

    console.log(newArray[position - 1]);

    return newArray[position - 1];
  }));
}
