import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [data,setData] = useState()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => setData(json))
    },[])
  return (
    <div>
        {
            data? (
                <div>
                    <h1>{data.title}</h1>
                </div>
            ):
            <p>Loading..</p>
        }
    </div>
  )
}

export default Fetch