import React from 'react'
import { NavLink } from 'react-router-dom'

const Toolbar = () => {
  return (
    <div>
      <ul className='header-list'>
        <li>
          <NavLink activeClassName='active-link' to='/albums'>albums</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' to='/posts'>posts</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' to='/todos'>todos</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Toolbar
