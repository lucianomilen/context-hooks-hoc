import React from 'react'
import Users from '../data/users.json'
import Select from 'react-select'
import { useStateValue } from '../store/state'

const Login = ({ history }) => {
  const [, dispatch] = useStateValue()
  const options = Users.map(user => {
    return { value: user.name, label: user.name }
  })

  const handleChange = user => {
    dispatch({
      type: 'login',
      newUser: user.value
    })
    history.replace('list')
  }

  return (
    <div>
      <Select
        options={options}
        onChange={handleChange}
      />
    </div>
  )
}

export default Login
