import React, { useEffect, useState } from 'react'
import { fetchList } from '../api/services'
import { useStateValue } from '../store/state'
import List from '../components/List'

const Todos = () => {
  useEffect(() => { fetchTodos() }, [])
  const [{ TodosState }, dispatch] = useStateValue()
  const [loading, setLoading] = useState(true)

  async function fetchTodos () {
    const results = await fetchList('todos')
    setLoading(false)
    dispatch({
      type: 'setList',
      payload: {
        path: {
          entityState: 'TodosState',
          listName: 'todos'
        },
        list: results.data
      }
    })
  }

  return (
    <div className='main-container'>
      <h2 className='list-title'>todos</h2>
      <List data={TodosState.todos} loading={loading} />
    </div>
  )
}

export default Todos
