const reducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return {
        ...state,
        loggedUser: action.newUser
      }
    }
    case 'setList': {
      const { entityState, listName } = action.payload.path
      state[entityState][listName] = action.payload.list
      return {
        ...state
      }
    }
    default:
      return state
  }
}

export default reducer
