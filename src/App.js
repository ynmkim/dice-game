import Dice from "./Dice";

function App() { 
  return (
    <div>
      <Dice color="blue" num={2} />
      <Dice color="red" num={2} />
    </div>
  )
}

export default App;