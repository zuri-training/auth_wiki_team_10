import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CommentForm = ({ docId }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = `https://auth-wiki-team10.herokuapp.com/api/comments/`
            //1. Get accessToken from localstorage
            const token = JSON.parse(localStorage.getItem("authTokens"))
            //return console.log(token.accessToken)
            //2. Do the request

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
            //window.location.reload(false);
            console.log(response.data)
        } catch (error) {
            console.log('get doc error', error)
        }
    }


    useEffect(() => {
        handleSubmit()
    }, [])


    return (
        <form action="" onSubmit={handleSubmit} className="comment__form">
            <h3>Add a Comment</h3>
            <div className="area">
                <textarea name="" id="" cols="50" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type something..."></textarea>
                <button type='submit'>send</button>
            </div>

        </form>
    )
}

export default CommentForm