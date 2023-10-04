import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() { 
  // 각 컴포넌트의 State를 한 곳에서 관리하고 싶다면 부모 컴포넌트의 State로 옮겨서 Props로 내려줄 수 있음

  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  // 첫 번째 요소는 state 값 : 현재 변수의 값을 나타냄
  // 두 번째 요소는 setter 함수 : 이 함수를 호출 할 때 파라미터로 전달하는 값으로 State 값이 변경됨
  // State를 사용할 때는 이 변수에 새로운 값을 할당하면서 값을 변경하는 게 아니라 반드시 이 Setter 함수를 통해서만 값을 변경해야 함
  // 자식 컴포넌트의 State를 부모 컴포넌트로 올려주는 걸 State Lifting이라고 부름

  const handleRollClick = () => { 
    const nextMyNum = random(6)
    const nextOtherNum = random(6)
    setMyHistory([...myHistory, nextMyNum])
    setOtherHistory([...otherHistory, nextOtherNum])
    // gameHistory.push(nextNum); // 잘못된 방식
    // setGameHistory(gameHistory);
    // 배열이나 객체 같은 참조형 State를 사용할 때는 메소드나 할당 연산자로 값을 바꾸는 것이 아니라 반드시 새로운 값을 만들어서 변경해야 함 (Spread 구문을 활용하여 배열 복사)
  }

  const handleClearClick = () => { 
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div>
      <div>
        <Button color="blue" onClick={handleRollClick}>던지기</Button>
        <Button color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div> 
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  )
}

export default App;