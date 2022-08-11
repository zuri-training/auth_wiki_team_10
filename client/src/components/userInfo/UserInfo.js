import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import Logout from '../../assets/images/logout.png'
import './UserInfo.css'

const UserInfo = () => {
  const { user, logoutUser } = useContext(AuthContext)
  console.log(user)
  return (
    <div>
      <span style={{ color: "white", marginRight: "5px" }}>Hello, {user.name} <img src={user.imgUrl} alt="" className='user__img' />  </span>
      <button onClick={logoutUser} className="user__btn"> <span>Logout</span> <img src={Logout} alt="" className='logout' /> </button>
    </div>
  )
}

export default UserInfo