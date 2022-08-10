import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

//CSS files
import './Documentation.css'

//Images
import ViewIcon from '../../assets/images/view.png'



const Documentation = () => {
  const [docs, setDocs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    getDocs()
  }, [])

  const getDocs = async () => {
    try {
      const doc_url = 'https://auth-wiki-team10.herokuapp.com/api/docs/'

      //const token = JSON.parse(localStorage.getItem("authTokens"))

      const response = await axios.get(doc_url
        //  headers: { Authorization: `Bearer ${token.accessToken}` }
      );
      setDocs(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log('get doc error', error)
    }
  }

  return (

    <div>

      <main id='docs__container'>
        {isLoading ? (<div style={{ marginTop: "3rem" }}> Loading resources...</div >) : (
          <>
            <section id="getting-started">
              <h1>Getting Started</h1>
              <p>
                A Comprehensive page on Auth-wiki Documentation and related
                information
              </p>
            </section>
            <section id="intro">
              <h3 className="m-bottom">Introduction</h3>
              <p className="margin">
                Auth-wiki provides a comprehensive collection of authentication
                codes for developers. Extremely flexible and modular, Auth wiki
                codes can be dropped into any Express based Web application for use.
                It is a beginner friendly Authentication library that ranges from
                login and sign up authentication to the most complicated of
                authentications, this Documentation will help you understand
                Auth-wiki and apply it in your various applications.
              </p>
            </section>

            {docs.map((doc) => (
              <section className="section" key={doc.id}>
                <div className="div1">
                  <h3>{doc.title}</h3>
                  <p className="margin">{doc?.description}</p>
                </div>
                <div className="top div2">
                  <div className="flex">
                    <img src={ViewIcon} className="vector" alt="" />
                    {user ? (
                      <Link to={`/documentation/${doc.id}`} className="link b-bottom">
                        View full Documentation
                      </Link>

                    ) : (
                      <Link to={"/login"} className="link b-bottom">
                        View full Documentation
                      </Link>
                    )}

                  </div>
                </div>
              </section>
            ))}

            <section className="section">
              <div className="div1">
                <h3>The Community</h3>
                <p className="margin">
                  We have a healthy and welcoming community built around some
                  guidelines you must follow. We allow Signed in Users to view,
                  interact, comment, download or copy and also drop a reaction to
                  our authentication codes. But it is important that you are a
                  verified user of Auth Wiki before you are liable to enjoy all the
                  benefits.
                </p>
              </div>
            </section>
            <section className="signup">
              <p>
                Get unlimited access to all of Auth-wiki features today, join us.
              </p>
              <h1 style={{textAlign: 'center'}}>Enhance your productivity, <span>Register Now!</span></h1>
              <Link to={'/signup'}><button type="submit">Sign up</button></Link>

            </section>
          </>
        )}

      </main>

    </div>
  )
}

export default Documentation;