import React, { type FC } from 'react'
interface inputProps {
    input: number;
    setInput: React.Dispatch<React.SetStateAction<any>>;
}
   

const Input: FC<inputProps> = ({ input, setInput }) => {
  return (
    <div>
      <input type="text" 
      value={input} 
      onChange={(e) => setInput(Number(e.target.value))} />
    </div>
  )
}

export default Input
