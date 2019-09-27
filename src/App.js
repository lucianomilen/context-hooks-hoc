import React from 'react'
import './App.scss'
import { StateProvider, UserState, ListState, GlobalState } from './store/state'
import reducer from './store/reducer'
import Toolbar from './components/Toolbar'
import Login from './components/Login'
import Posts from './pages/Posts'
import { Route, Switch } from 'react-router-dom'
import Albums from './pages/Albums'
import Todos from './pages/Todos'

const App = () => {
  const state = {
    userState: UserState,
    globalState: GlobalState,
    ...ListState
  }

  return (
    <div className='App'>
      <StateProvider initialState={state} reducer={reducer}>
        <Toolbar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/albums' component={Albums} />
          <Route exact path='/todos' component={Todos} />
        </Switch>
      </StateProvider>
    </div>
  )
}

export default App
