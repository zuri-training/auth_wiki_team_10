import React from 'react';
import axios from 'axios';
import shareIcon from '../../../assets/images/share.png'
import Likes from '../../../assets/images/like.png'
import Dislikes from '../../../assets/images/dislike.png'


const Reactions = ({ docId, likes, disLikes }) => {
    const handleLike = async () => {
        try {
            const url = `https://auth-wiki-team10.herokuapp.com/api/reactions/`
            const token = JSON.parse(localStorage.getItem("authTokens"))
            await axios({
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
            const token = JSON.parse(localStorage.getItem("authTokens"))

            await axios({
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