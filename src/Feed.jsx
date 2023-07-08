import React from 'react'
import CreatePost from './CreatePost'
import './feed.css'
import AllPost from './AllPost'

function Feed() {
  return (
    <div className='feed'>
      <CreatePost />
      <hr />
      <AllPost />
    </div>
  )
}

export default Feed
