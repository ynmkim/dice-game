import Dice from "./Dice";

function Board({ name, color, gameHistory }) { 
  const num = gameHistory[gameHistory.length - 1] || 1; // ? 이해가 안감
  const sum = gameHistory.reduce((a, b) => a + b, 0); // 배열.reduce((acc, el, i, arr) => { return nextAccValue; }, initialAccValue);

  // console.log(gameHistory, gameHistory.length - 1)
  
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h3>총점</h3>
      <p>{sum}</p>
      <h3>기록</h3>
      <p>{gameHistory.join(', ')}</p>  {/* 배열.join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듬 */}
    </div>
  )
}

export default Board;