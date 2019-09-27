import React, { useEffect, useState } from 'react'
import { fetchList } from '../api/services'
import { useStateValue } from '../store/state'
import List from '../components/List'

const Albums = () => {
  useEffect(() => { fetchAlbums() }, [])
  const [{ AlbumsState }, dispatch] = useStateValue()
  const [loading, setLoading] = useState(true)

  async function fetchAlbums () {
    const results = await fetchList('albums')
    setLoading(false)
    dispatch({
      type: 'setList',
      payload: {
        path: {
          entityState: 'AlbumsState',
          listName: 'albums'
        },
        list: results.data
      }
    })
  }

  return (
    <div className='main-container'>
      <h2 className='list-title'>albums</h2>
      <List data={AlbumsState.albums} loading={loading} />
    </div>
  )
}

export default Albums
