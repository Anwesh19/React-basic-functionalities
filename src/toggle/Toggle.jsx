import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <div>
        <input type="checkbox" name="" onChange={handleToggle} />
        <p>{toggle ? "On" : "off"}</p>
    </div>
  )
}

export default Toggle