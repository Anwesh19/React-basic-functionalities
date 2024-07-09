import React, { useState } from 'react'

const UserInput = () => {
    const [value, setValue] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)} />
        <h1>{value}</h1>
    </div>
  )
}

export default UserInput