import React, { useContext } from 'react'
import axios from 'axios';
import Likes from '../../../assets/images/like.png'
import Dislikes from '../../../assets/images/dislike.png'
import Delete from '../../../assets/images/delete.png'


const Comments = ({ content, user, myKey, author }) => {


  const handleDelete = async () => {

    try {
      const url = `https://auth-wiki-team10.herokuapp.com/api/comments/${myKey}/delete/`
      //1. Get accessToken from localstorage
      const token = JSON.parse(localStorage.getItem("authTokens"))
      //return console.log(token.accessToken)
      //2. Do the request

      const response = await axios({
        method: "DELETE",
        url,
        headers: { Authorization: `Bearer ${token.accessToken}` },
      });
      alert("message deleted")
      window.location.reload(false);
    } catch (error) {
      console.log('get doc error', "not working")

    }

  }



  return (
    <div className='comment'>
      <div className="head"><img src={user.imgUrl} alt="" className='user__img' /><strong>{content.author.name}</strong> <small>{content.createdAt}</small></div>
      <p>{content.message}</p>
      <div className="reactions">
        {
          user.email === author.email ? (
            <>
              <img src={Likes} alt="likeIcon" />
              <img src={Dislikes} alt="dislikeIcon" />
              <img src={Delete} alt="DeleteIcon" onClick={handleDelete} />
            </>
          ) : (
            <>
              <img src={Likes} alt="likeIcon" />
              <img src={Dislikes} alt="dislikeIcon" />
            </>
          )
        }


      </div>


    </div>
  )
}

export default Comments