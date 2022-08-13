import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, NavLink, useParams } from 'react-router-dom'
import Heading from './api-components/Heading'
import Paragraph from './api-components/Paragraph'
import Image from './api-components/Image'
import Comments from './api-components/Comments'
import CommentForm from './api-components/CommentForm'
import DocsReaction from './api-components/DocsReaction'
import AuthContext from "../../context/AuthContext";
import './DetailedDocs.css'
import Subheading from './api-components/Subheading'
import Reactions from './api-components/Reactions'
import Links from './api-components/Links'

//images

import LikesIcon from '../../assets/images/likeyellow.png'
import DownloadIcon from '../../assets/images/downloadIcon.png'
import CommentIcon from '../../assets/images/conversation.png'
import CodeBlock from './api-components/CodeBlock'




const DetailedDocs = () => {
  let { id } = useParams()
  const { user } = useContext(AuthContext)
  const [detailedDocs, setDetailedDocs] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  const getDetailedDocs = async () => {
    try {
      const url = `https://auth-wiki-team10.herokuapp.com/api/docs/${id}`
      //1. Get accessToken from localstorage
      const token = JSON.parse(localStorage.getItem("authTokens"))
      //return console.log(token.accessToken)
      //2. Do the request

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token.accessToken}` }
      });

      //3.Check response object
      console.log(response.data)
      setDetailedDocs(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log('get doc error', error)
    }
  }


  useEffect(() => {
    getDetailedDocs()
  }, [])


  return (
    <div className="detaileddoc__container">

      {isLoading ? (<div>Loading resources...</div>) : (


        <>
          <div className="top">
            <h1>{detailedDocs.title}</h1>
            <p>{detailedDocs.description}</p>
          </div>


          <div className='detaileddoc__wrapper'>
            <div className="left__block">
              {detailedDocs.blocks.map((bloc, index) => {

                if (bloc.type === "heading") return <Heading content={bloc.content} key={index} />
                else if (bloc.type === "subheading") return <Subheading content={bloc.content} key={index} />
                else if (bloc.type === "paragraph") return <Paragraph content={bloc.content} key={index} />
                else if (bloc.type === "image") return <Image content={bloc.content} key={index} />

              })}
              <hr />
              <div className="download">
                <h1>Download Code sample</h1>
                <p>Get a copy of the Authentication code for personal use anytime for the three languages.</p>
                <div className="downloadLinks">
                  <Links 
                    downloadLinkPython={detailedDocs.downloadLinkPython}
                    downloadLinkNode={detailedDocs.downloadLinkNode}
                    downloadLinkPhp={detailedDocs.downloadLinkPhp}
                  />
                </div>
              </div>

              <Reactions docId={detailedDocs.id} likes={detailedDocs.likes} disLikes={detailedDocs.disLikes} />

              <CommentForm docId={detailedDocs.id} user={user} />

              <div className="community__says">
                <h1 style={{ fontSize: "1.5rem" }}>What the Community says</h1>
                <div className="community__says--icons" style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "4rem" }}>
                  <div className="says__icon"><img src={DownloadIcon} alt="php" /> <small style={{ color: 'green' }}>0</small></div>
                  <div className="says__icon"><img src={LikesIcon} alt="php" /> <small style={{ color: 'orange' }}>{detailedDocs.likes}</small></div>
                  <div className="says__icon"><img src={CommentIcon} alt="php" /> <small style={{ color: 'red' }}>{detailedDocs.comments.length}</small></div>
                </div>
              </div>

              {detailedDocs.comments.map((comment) => {
                return (
                  <Comments key={comment.id} content={comment} user={user} myKey={comment.id} author={comment.author} />
                )

              })}
            </div>
            <div className="right__block">
              <div className='code__wrapper'>
                <h6>
                  Code Library
                </h6>
                <NavLink to={'/documentation'} className={({ isActive }) => (isActive ? "code_active" : "")}>
                  Token Based Authentication
                </NavLink>

                <NavLink to={'/documentation'} className={({ isActive }) => (isActive ? "code_active" : "")}>
                  Two-factor Authentication
                </NavLink>

                <NavLink to={'/documentation'} className={({ isActive }) => (isActive ? "code_active" : "")}>
                  Multi-Factor Authentication
                </NavLink>

                <h6 style={{ marginTop: "2rem" }}>On This Page</h6>
                {detailedDocs.blocks.map((bloc, index) => {
                  if (bloc.type === "heading") return <CodeBlock content={bloc.content} key={index} />
                  // else if (bloc.type === "subheading") return bloc.content
                })}
              </div>
            </div>
          </div>

        </>



      )}



    </div>

  )
}

export default DetailedDocs;