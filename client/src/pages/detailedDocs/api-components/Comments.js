import React from 'react'
import Likes from '../../../assets/images/like.png'
import Dislikes from '../../../assets/images/dislike.png'
import Delete from '../../../assets/images/delete.png'

const Comments = ({ content }) => {
  return (
    <div className='comment'>
      <div className="head"><strong>{content.author.name}</strong> <small>{content.createdAt}</small></div>
      <p>{content.message}</p>
      <div className="reactions">
        <img src={Likes} alt="likeIcon" />
        <img src={Dislikes} alt="dislikeIcon" />
        <img src={Delete} alt="DeleteIcon" /> <br /> <br /> <br />
      </div>


    </div>
  )
}

export default Comments