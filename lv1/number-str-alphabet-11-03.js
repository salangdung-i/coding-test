function solution(s) {
    var answer = 0;

     // 1. 변환하려는 키, 값에 넣어야함
    const numStr = [
        { num :'0', str : 'zero'},
        { num :'1', str : 'one'},
        { num :'2', str : 'two'},
        { num :'3', str : 'three'},
        { num :'4', str : 'four'},
        { num :'5', str : 'five'},
        { num :'6', str : 'six'},
        { num :'7', str : 'seven'},
        { num :'8', str : 'eight'},
        { num :'9', str : 'nine'}     
    ];

    // 2. 모든문자열 치환 replaceAll
    numStr.forEach((n) => {
        s = s.replaceAll(n.str, n.num);
    });

    console.log(s);
    answer = Number(s);
    return answer;
}

const s = "oneone4seveneight";
solution(s);