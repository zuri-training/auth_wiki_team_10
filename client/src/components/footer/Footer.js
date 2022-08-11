import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

//CSS file
import './Footer.css'

//Image imports
import Logo from '../../assets/images/logo-auth.png';
import Tel from '../../assets/svgs/Button.svg'
import Address from '../../assets/svgs/Button-1.svg'
import Fax from '../../assets/svgs/Button-2.svg'
import MiniButton from '../../assets/svgs/Mini Button.svg'
import MiniButton1 from '../../assets/svgs/Mini Button-1.svg'
import MiniButton2 from '../../assets/svgs/Mini Button-2.svg'
import MiniButton3 from '../../assets/svgs/Mini Button-3.svg'

const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleContact = async (e) => {
        e.preventDefault()


        try {
            const url = `https://auth-wiki-team10.herokuapp.com/api/email/contact-us/`
            const response = await axios({
                method: "POST",
                url,
                data: {
                    name,
                    email,
                    message,
                },
                // headers: { Authorization: `Bearer ${token.accessToken}` },
            });
            setMessage('')
            alert("message sent")
            window.location.reload(false);

        } catch (error) {
            console.log('get doc error', error)
        }

    }

    return (
        <div>
            {/* Beginning of footer */}
            <footer>
                <div className="footer__flex">
                    <div className="footer__about">
                        <img src={Logo} alt="Logo" className="auth__logo" />
                        <p>Auth-wiki provides a comprehensive collection of authentication codes for developers.
                            Extremely flexible and modular, Auth wiki codes can be dropped into any Express based Web application for use.
                        </p>
                        <div className="foot__icon">
                            <img src={Tel} alt="tel" />
                            <span>Tel<br />
                                310-437-2766</span>
                        </div>
                        <div className="foot__icon">
                            <img src={Address} alt="address" />
                            <span>Address<br />
                                Lagos, Nigeria.</span>
                        </div>
                        <div className="foot__icon">
                            <img src={Fax} alt="fax" />
                            <span>Fax<br />
                                +1-212-9876543</span>
                        </div>
                    </div>

                    <div className="footer__about">

                        <form onSubmit={handleContact}>
                            <h5>Contact Us</h5>
                            <p>We usually respond before 24 hours.</p>
                            <input type="text" placeholder="Name" name="" id="name" style={{ background: "white" }} required value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="E-mail" name="" id="email" style={{ background: "white" }} required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <textarea name="" placeholder="Your Message" id="message" cols="5" rows="3" required value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    <div className="footer__about">
                        {/*id = social*/}
                        <h5 className='social'>Social Media</h5>
                        <p className='social'>Be the first one to know  about discounts, offers and events</p>
                        <div className="footer__social">
                            <img src={MiniButton} alt="mini-btn" />
                            <img src={MiniButton1} alt="mini-btn1" />
                            <img src={MiniButton2} alt="mini-btn2" />
                            <img src={MiniButton3} alt="mini-btn3" />
                        </div>
                    </div>
                </div>
                <div className="footer__links">
                    <ul>
                        <li><Link to={'/'}>About Us</Link></li>
                        <li><Link to={'/'}>Contact</Link></li>
                        <li><Link to={'/community'}>Privacy Policy</Link></li>
                        <li><Link to={'/'}>Sitemap</Link></li>
                        <li><Link to={'/community'}>Terms of Use</Link></li>
                    </ul>
                    <p>© 2000-2022, All Rights Reserved.</p>
                </div>
            </footer>
            {/* end of footer */}</div>
    )
}

export default Footer