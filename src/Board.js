import Dice from "./Dice";

function Board({name, color, num, sum, gameHistory}) { 
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