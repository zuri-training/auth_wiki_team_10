import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


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
          <h1>{detailedDocs.blocks.map((bloc) => bloc.content)}</h1>
        </> 
      )}
    </div>
    
  )
}

export default DetailedDocs;