import React, { useEffect, useState } from 'react'
import { fetchList } from '../api/services'
import { useStateValue } from '../store/state'
import List from '../components/List'

const Posts = () => {
  useEffect(() => { fetchPosts() }, [])
  const [{ PostsState }, dispatch] = useStateValue()
  const [loading, setLoading] = useState(true)

  async function fetchPosts () {
    const results = await fetchList('posts')
    setLoading(false)
    dispatch({
      type: 'setList',
      payload: {
        path: {
          entityState: 'PostsState',
          listName: 'posts'
        },
        list: results.data
      }
    })
  }

  return (
    <div className='main-container'>
      <h2 className='list-title'>posts</h2>
      <List data={PostsState.posts} loading={loading} />
    </div>
  )
}

export default Posts
