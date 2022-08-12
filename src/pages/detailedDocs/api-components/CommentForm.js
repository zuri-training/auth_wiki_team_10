import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DetailedDocs from '../DetailedDocs';

const CommentForm = ({ docId, user }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const url = `https://auth-wiki-team10.herokuapp.com/api/comments/`
            const token = JSON.parse(localStorage.getItem("authTokens"))

            const response = await axios({
                method: "POST",
                url,
                data: {
                    message,
                    docId,
                },
                headers: { Authorization: `Bearer ${token.accessToken}` },
            });
            setMessage('')
            alert("comment added")
            window.location.reload(false);
        } catch (error) {
            console.log('get doc error', error)
        }

    }



    useEffect(() => {
        handleSubmit()
    }, [])


    return (
        <form action="" onSubmit={handleSubmit} className="comment__form">
            <h3 className='user__info'> <img src={user.imgUrl} alt="" className='user__img' /> <span> Add a Comment</span></h3>
            <div className="area">
                <textarea name="" id="" cols="50" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type something..." required></textarea>
                <button type='submit'>send</button>
            </div>

        </form>
    )
}

export default CommentForm