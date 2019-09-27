import React from 'react'

const List = (props) => {
  const { data, loading } = props
  return (
    <ul className='main-list'>
      {loading && 'Loading...'}
      {
        !loading && data.map(item => (
          <li className='main-item' key={item.id}>
            {item.title}
          </li>
        ))
      }
    </ul>
  )
}

export default List
