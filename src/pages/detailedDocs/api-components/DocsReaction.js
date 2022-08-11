import React from 'react'

const DocsReaction = ({likes, dislikes}) => {
    
  return (
    <div>
        <span>Likes: {likes}</span>
       <span>Dislikes: {dislikes}</span>
    </div>
  )
}

export default DocsReaction