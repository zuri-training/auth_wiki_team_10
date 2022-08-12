import NodejsIcon from '../../../assets/images/Nodejs.png'
import phpIcon from '../../../assets/images/php.png'
import PythonIcon from '../../../assets/images/python.png'

const Links = ({ downloadLinks }) => {
    return (
        <>
            <div className='download__links'>
                {/* <Link to={""}> <img src={phpIcon} alt="php" /> <span>Get php code</span> </Link> */}
                {/* <Link to={""}>  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span></Link> */}
                {/* <Link to={downloadLink} target="_blank">  <img src={PythonIcon} alt="php" /> <span>Get python code</span></Link> */}
                <a href={downloadLinks.downloadLinkPhp} target="_blank" rel="noreferrer">  <img src={phpIcon} alt="nodejs" /> <span>Get php code</span>  </a>
                <a href={downloadLinks.downloadLinkNode} target="_blank" rel="noreferrer">  <img src={NodejsIcon} alt="nodejs" /> <span>Get nodejs code</span>  </a>
                <a href={downloadLinks.downloadLinkPython} target="_blank" rel="noreferrer">  <img src={PythonIcon} alt="nodejs" /> <span>Get python code</span>  </a>
            </div>

        </>
    )
}

export default Links