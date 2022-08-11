import React, { useState } from 'react';
import axios from 'axios';
import shareIcon from '../../../assets/images/share.png'
import Likes from '../../../assets/images/like.png'
import Dislikes from '../../../assets/images/dislike.png'


const Reactions = ({ docId, likes, disLikes }) => {
    const [liked, setLiked] = useState(likes)
    const [disliked, setDisliked] = useState(disLikes)


    const handleLike = async () => {
        try {
            const url = `https://auth-wiki-team10.herokuapp.com/api/reactions/`
            //1. Get accessToken from localstorage
            const token = JSON.parse(localStorage.getItem("authTokens"))
            //return console.log(token.accessToken)
            //2. Do the request

            const response = await axios({
                method: "POST",
                url,
                data: {
                    isLike: true,
                    docId,
                },
                headers: { Authorization: `Bearer ${token.accessToken}` },
            });
            window.location.reload(false);
        } catch (error) {
            console.log('get doc error', error)
        }
    }

    const handleDislike = async () => {
        try {
            const url = `https://auth-wiki-team10.herokuapp.com/api/reactions/`
            //1. Get accessToken from localstorage
            const token = JSON.parse(localStorage.getItem("authTokens"))
            //return console.log(token.accessToken)
            //2. Do the request

            const response = await axios({
                method: "POST",
                url,
                data: {
                    isLike: false,
                    docId,
                },
                headers: { Authorization: `Bearer ${token.accessToken}` },
            });
            window.location.reload(false);
        } catch (error) {
            console.log('get doc error', error)
        }
    }



    return (
        <div className='download__links' id='share'>
            <button> <img src={shareIcon} alt="php" /> <span>share</span> </button>
            <button onClick={handleLike}> <img src={Likes} alt="like" /> <span>{likes}</span></button>
            <button onClick={handleDislike}> <img src={Dislikes} alt="dislike" /> <span>{disLikes}</span></button>
        </div>

    )
}

export default Reactions