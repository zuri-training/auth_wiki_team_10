import React from 'react'

const UserInfo = ({ user }) => {
  return (
    <div>
       Welcome, {user.fullname}
    </div>
  )
}

export default UserInfo