import React from 'react'
import Pagination from './Pagination'

const PageItems = () => {
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 12',
      ];
  return (
    <div>
        <Pagination items={items} itemsPerPage={3}/>
    </div>
  )
}

export default PageItems