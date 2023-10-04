import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
}
// console.log(Math.ceil(Math.random()) * 6)

function App() { 
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  // 첫 번째 요소는 state 값 : 현재 변수의 값을 나타냄
  // 두 번째 요소는 setter 함수 : 이 함수를 호출 할 때 파라미터로 전달하는 값으로 State 값이 변경됨
  // State를 사용할 때는 이 변수에 새로운 값을 할당하면서 값을 변경하는 게 아니라 반드시 이 Setter 함수를 통해서만 값을 변경해야 함

  const handleRollClick = () => { 
    const nextNum = random(6)
    setNum(nextNum);
    setSum(sum + nextNum);
    // gameHistory.push(nextNum); // 잘못된 방식
    // setGameHistory(gameHistory);
    setGameHistory([...gameHistory, nextNum]) // 배열이나 객체 같은 참조형 State를 사용할 때는 메소드나 할당 연산자로 값을 바꾸는 것이 아니라 반드시 새로운 값을 만들어서 변경해야 함 (Spread 구문을 활용하여 배열 복사)
    // console.log([...gameHistory, nextNum])
  }

  const handleClearClick = () => { 
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h3>총점</h3>
        <p>{sum}</p>
        <h3>기록</h3>
        <p>{gameHistory.join(', ')}</p>  {/* 배열.join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듬 */}
      </div>
    </div>
  )
}

export default App;