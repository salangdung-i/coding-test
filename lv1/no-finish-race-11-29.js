function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    if (!completion.includes(participant[i]))
      return console.log(participant[i]);
  }
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];


solution(participant, completion);
console.log("result : leo");