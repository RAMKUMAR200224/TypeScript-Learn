import { useState } from "react"
import Input from "./Input";

useState

const App = () => {
  const[first, setFirst]= useState<number>(0);
  const [input, setInput] = useState<number>(0);

  const increment = (inc:number) => {
    setFirst((curr) => curr + inc)
    setInput(0)
  }
  return (
    <div>
      <h1>{first}</h1>
      <Input input={input} setInput={setInput} /> 
      <button onClick={() => increment(input)}>Add</button>
      {/* <button onClick={() => increment(-1)}>Decrement</button> */}
    </div>
  )
}

export default App
