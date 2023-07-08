import React, { useEffect, useState } from 'react'
import Post from './Post'
import "./allpost.css"
import { collection, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'
import FlipMove from 'react-flip-move';

function AllPost() {

  const postRef = collection(db, "Posts")
  const q = query(postRef, orderBy("time", "desc"))
  const [postCollection, setPostCollection] = useState([])


  useEffect(()=>{
    onSnapshot(q, (snapshot)=>{
      let newArr = []
      snapshot.docs.forEach((doc)=>{
        newArr.push({id: doc.id, ...doc.data()})
      })
      setPostCollection(newArr)
    })

    
  }, [])

  return (
    <div className='allpost'>
      <FlipMove  className='allpost'>

      {postCollection.map((e)=>{
        return <Post key={e.id} name={e.postBy} text={e.postText} />
      })}
      </FlipMove>
      
    </div>
  )
}

export default AllPost
