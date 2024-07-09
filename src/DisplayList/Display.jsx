import React from 'react'

const Display = () => {
    const items = ["anwes","an","anwe","anwesh","nwesh",]
  return (
    <ul>
    {items.map((item)=><li>{item}</li>)}
    </ul>
  )
}

export default Display