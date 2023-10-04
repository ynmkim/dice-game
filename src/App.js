import Dice from "./Dice";

function App() { 
  return (
    <div>
      <Dice />
      <Dice color="red" num={2} />
    </div>
  )
}

export default App;