import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
}
// console.log(Math.ceil(Math.random()) * 6)

function App() { 
  const [num, setNum] = useState(1);
  // 첫 번째 요소는 state 값 : 현재 변수의 값을 나타냄
  // 두 번째 요소는 setter 함수 : 이 함수를 호출 할 때 파라미터로 전달하는 값으로 State 값이 변경됨
  // State를 사용할 때는 이 변수에 새로운 값을 할당하면서 값을 변경하는 게 아니라 반드시 이 Setter 함수를 통해서만 값을 변경해야 함

  const handleRollClick = () => { 
    const nextNum = random(6)
    setNum(nextNum);
  }

  const handleClearClick = () => { 
    setNum(1);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  )
}

export default App;