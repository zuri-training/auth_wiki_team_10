import React from 'react'
import { Link } from 'react-router-dom'
import NodejsIcon from '../../../assets/images/Nodejs.png'
import phpIcon from '../../../assets/images/php.png'
import PythonIcon from '../../../assets/images/python.png'

const Links = ({ downloadLink }) => {
    return (
        <>
            <div className='download__links'>
                <Link to={""}> <img src={phpIcon} alt="php" /> <span>Get php code</span> </Link>
                <Link to={""}>  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span></Link>
                <Link to={downloadLink}>  <img src={PythonIcon} alt="php" /> <span>Get python code</span></Link>

            </div>

        </>
    )
}

export default Links