import React, { useState } from 'react'

const Search = ({items}) => {
    const [search, setSearch] = useState('')
    const filter = items.filter((item)=>
        item.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>
        <input type="text" name="" placeholder='search' onChange={(e)=>setSearch(e.target.value)} />
        <ul>
            {filter.map((item,index)=>(
                <li key={index}>
                    {item}
                </li>
            ))
            }
            
        </ul>
    </div>
  )
}

export default Search