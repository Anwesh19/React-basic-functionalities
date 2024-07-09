import React from 'react'
import Search from './Search'

const Items = () => {
    const items = ['item1','item2','item3','anotheritem1','anotheritem2']
  return (
    <Search items={items}/>
  )
}

export default Items