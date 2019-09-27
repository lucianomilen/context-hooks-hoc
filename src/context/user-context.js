import Users from '../data/users.json'
import { createContext } from 'react'

export const UserContext = createContext({
  users: Users,
  selectedUser: Users[0]
})
