function solution(board, moves) {
  var answer = 0;
  let temp;
  var arr1 = new Array();
  var arr2 = new Array();
  var arr3 = new Array();
  var arr4 = new Array();
  var arr5 = new Array();
  
  var box = new Array();

  for(let i = board.length- 1; i >= 0; i--) {
    arr1.push(board[i][0]);
    arr2.push(board[i][1]);
    arr3.push(board[i][2]);
    arr4.push(board[i][3]);
    arr5.push(board[i][4]);
  }

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  console.log(arr5);

  for(let i=0; i < moves.length ;i++) {
    
    switch(moves[i]) {
      case 1:
        box.push(notZero(arr1));
        break;
      case 2:
        box.push(notZero(arr2));
        break;
      case 3:
        box.push(notZero(arr3));
        break;
      case 4:
        box.push(notZero(arr4));
        break;
      case 5:
        box.push(notZero(arr5));
        break;
                
    }
  }

  console.log(box);
  box = box.filter((b) => b !== 0);
  console.log(box);

  for(let i=0; i<box.length; i++) {
    let tempbox = box[i];
    if(tempbox === box[i+1]){
      console.log(`box ${box}`);
      box.splice(i, i+1)
      console.log(`box ${box}`);
      
    }
    answer += 1;
  }
  console.log(box)
  
  console.log(`결과 : ${answer}`);
  return answer;
}

function notZero(arr) {

  if(!arr.length){
    return 0;
  }

  temp = arr.pop();

  if(temp !== 0){
    console.log(`temp, ${temp}`);
   }else{
    notZero(arr);
  }
  return temp;
}

const board =[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
	
solution(board, moves);
console.log(`정답 : 4`);