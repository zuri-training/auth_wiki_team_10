import React from 'react'
import { Link } from 'react-router-dom'
import NodejsIcon from '../../../assets/images/Nodejs.png'
import phpIcon from '../../../assets/images/php.png'
import PythonIcon from '../../../assets/images/python.png'

const Links = ({ downloadLink }) => {
    return (
        <>
            <div className='download__links'>
<<<<<<< HEAD
                <Link to={""}> <img src={phpIcon} alt="php" /> <span>Get php code</span> </Link>
                <Link to={""}>  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span></Link>
                {/* <Link to={downloadLink}>  <img src={PythonIcon} alt="php" /> <span>Get python code</span></Link> */}
                <a href={downloadLink} target="_blank" rel="noreferrer"><img src={PythonIcon} alt="php" /> <span>Get python code</span></a>
=======
                {/* <Link to={""}> <img src={phpIcon} alt="php" /> <span>Get php code</span> </Link> */}
                {/* <Link to={""}>  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span></Link> */}
                {/* <Link to={downloadLink} target="_blank">  <img src={PythonIcon} alt="php" /> <span>Get python code</span></Link> */}
                <a href={downloadLink} target="_blank" rel="noreferrer">  <img src={phpIcon} alt="php" /> <span>Get php code</span>  </a>
                <a href={downloadLink} target="_blank" rel="noreferrer">  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span>  </a>
                <a href={downloadLink} target="_blank" rel="noreferrer">  <img src={PythonIcon} alt="python" /> <span>Get python code</span>  </a>
>>>>>>> 550df5e59a968dbb7bc76c0819b5eeb1353998c8

            </div>

        </>
    )
}

export default Links