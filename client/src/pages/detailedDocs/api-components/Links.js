import React from 'react'
import { Link } from 'react-router-dom'
import NodejsIcon from '../../../assets/images/Nodejs.png'
import phpIcon from '../../../assets/images/php.png'
import PythonIcon from '../../../assets/images/python.png'

const Links = ({ downloadLinkPython,downloadLinkNode, downloadLinkPhp }) => {
    return (
        <>
            <div className='download__links'>
                {/* <Link to={""}> <img src={phpIcon} alt="php" /> <span>Get php code</span> </Link> */}
                {/* <Link to={""}>  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span></Link> */}
                {/* <Link to={downloadLink} target="_blank">  <img src={PythonIcon} alt="php" /> <span>Get python code</span></Link> */}
                <a href={downloadLinkPhp} target="_blank" rel="noreferrer">  <img src={phpIcon} alt="php" /> <span>Get php code</span>  </a>
                <a href={downloadLinkNode} target="_blank" rel="noreferrer">  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span>  </a>
                <a href={downloadLinkPython} target="_blank" rel="noreferrer">  <img src={PythonIcon} alt="python" /> <span>Get python code</span>  </a>

            </div>

        </>
    )
}

export default Links