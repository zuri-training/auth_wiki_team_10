import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const UserInfo = ( ) => {
  const { user, logoutUser} = useContext(AuthContext)
  console.log(user)
  return (
    <div>
      <span style={{color:"white"}}>Hello, {user.email} </span>
       <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default UserInfo