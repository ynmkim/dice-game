import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() { 
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);
  // 첫 번째 요소는 state 값 : 현재 변수의 값을 나타냄
  // 두 번째 요소는 setter 함수 : 이 함수를 호출 할 때 파라미터로 전달하는 값으로 State 값이 변경됨
  // State를 사용할 때는 이 변수에 새로운 값을 할당하면서 값을 변경하는 게 아니라 반드시 이 Setter 함수를 통해서만 값을 변경해야 함
  // 자식 컴포넌트의 State를 부모 컴포넌트로 올려주는 걸 State Lifting이라고 부름

  const handleRollClick = () => { 
    const nextNum = random(6)
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum])
    // gameHistory.push(nextNum); // 잘못된 방식
    // setGameHistory(gameHistory);
    // 배열이나 객체 같은 참조형 State를 사용할 때는 메소드나 할당 연산자로 값을 바꾸는 것이 아니라 반드시 새로운 값을 만들어서 변경해야 함 (Spread 구문을 활용하여 배열 복사)

    const nextOtherNum = random(6)
    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum])
  }

  const handleClearClick = () => { 
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div> 
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
      </div>
    </div>
  )
}

export default App;