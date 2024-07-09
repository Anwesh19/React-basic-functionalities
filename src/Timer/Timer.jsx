import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime] = useState(60);
    useEffect(()=>{
        const timer = setTimeout(()=>setTime(time-1),1000);
        return () => clearTimeout(time)
    },[time])
  return (
    <div>{time}</div>
  )
}

export default Timer