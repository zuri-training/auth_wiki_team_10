import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Heading from './api-components/Heading'
import Paragraph from './api-components/Paragraph'
import Image from './api-components/Image'
import Comments from './api-components/Comments'
import CommentForm from './api-components/CommentForm'
import DocsReaction from './api-components/DocsReaction'


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
    <div style={{marginTop:"10rem"}}>
      {isLoading ? (<div>Loading resources...</div>) : (
        <>
         <h1>{detailedDocs.title}</h1>
         <p>{detailedDocs.description}</p>
         <small>BY {detailedDocs.author.name}</small>
          {detailedDocs.blocks.map((bloc, index) => {
            //  <div key={index}>
               if(bloc.type === "heading") return  <Heading content={bloc.content} key={index}/>
               else if(bloc.type === "paragraph") return <Paragraph content={bloc.content} key={index} />
               else if(bloc.type === "image") return <Image content ={bloc.content} key={index} />
            //  </div>           
          })}
          
         <DocsReaction likes={detailedDocs.likes} dislikes={detailedDocs.disLikes} />
          <CommentForm docId={detailedDocs.id} />

          {detailedDocs.comments.map((comment) => {
            return (
              <Comments key={comment.id} content={comment}/>
            )
          })}
        </> 
      )}
    </div>
    
  )
}

export default DetailedDocs;