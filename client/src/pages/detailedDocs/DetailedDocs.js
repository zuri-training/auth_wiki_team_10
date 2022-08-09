import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Heading from './api-components/Heading'
import Paragraph from './api-components/Paragraph'
import Image from './api-components/Image'
import Comments from './api-components/Comments'
import CommentForm from './api-components/CommentForm'
import DocsReaction from './api-components/DocsReaction'
import './DetailedDocs.css'
import Subheading from './api-components/Subheading'
import Links from './api-components/Links'

//images
import shareIcon from '../../assets/images/share.png'
import heartIcon from '../../assets/images/heart.png'




const DetailedDocs = () => {
  let { id } = useParams()
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
                  <Links />
                </div>
              </div>

              <div className='download__links' id='share'>
                <Link to={""}> <img src={shareIcon} alt="php" /> <span>share</span> </Link>
                <Link to={""}>  <img src={heartIcon} alt="nodejs" /> <span>like</span></Link>
              </div>

              <CommentForm docId={detailedDocs.id} />

              {detailedDocs.comments.map((comment) => {
                return (
                  <Comments key={comment.id} content={comment} />
                )

              })}
            </div>
            <div className="right__block">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat optio possimus inventore,
                quasi temporibus saepe culpa. Itaque error veniam laboriosam ipsum tempora voluptate earum voluptatibus, odio consequatur, vero aut facere quasi rem eligendi illo blanditiis ex officiis cum assumenda!
                Vitae architecto nam, quos quam adipisci iure? In repellendus ratione beatae?</p>
            </div>
          </div>

        </>



      )}



    </div>

  )
}

export default DetailedDocs;