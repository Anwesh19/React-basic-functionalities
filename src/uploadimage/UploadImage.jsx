import React, { useState } from 'react'

const UploadImage = () => {
    const [file,setFile] = useState()
    const handlefile = (e)=>{
        const selected = e.target.files[0];
        setFile(selected);
    }
  return (
    <div>

        <input type="file" accept='image/*' onChange={handlefile}/>
        {file && <img src={URL.createObjectURL(file)} alt="image only"/>}
    </div>
  )
}

export default UploadImage