import React, { useState } from 'react'

const ColorPicker = () => {
    const [selectColor,setSelectColor] = useState('#000000')
    const handleChange = (e) => {
        setSelectColor(e.target.value)
    }
  return (
    <div>
        <input type="color" onChange={handleChange} />
        <div style={{width:'100px',height:'100px',backgroundColor:selectColor}}></div>
    </div>
  )
}

export default ColorPicker