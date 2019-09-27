import React, { createContext, useContext, useReducer } from 'react'
import Users from '../data/users.json'

export const StateContext = createContext()
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)

export const UserState = {
  users: Users,
  loggedUser: ''
}

const PostsState = {
  posts: []
}

const AlbumsState = {
  albums: []

}

const TodosState = {
  todos: []
}

export const GlobalState = {
  currentResource: {},
  type: ''
}

export const ListState = {
  AlbumsState,
  PostsState,
  TodosState
}
