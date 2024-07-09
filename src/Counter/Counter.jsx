import React,{ useState } from 'react'
import Count from './Count'
const Counter = () => {
  const [count,setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Count count={count}/>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter