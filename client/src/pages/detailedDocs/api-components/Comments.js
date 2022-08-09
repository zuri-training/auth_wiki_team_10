import React from 'react'
import Likes from '../../../assets/images/view.png'

const Comments = ({content}) => {
  return (
    <div>
        <p>{content.createdAt}</p>
        <p>{content.message}</p>
        <p>{content.author.name}</p>
        <img src={Likes} alt="likeIcon" />
    </div>
  )
}

export default Comments