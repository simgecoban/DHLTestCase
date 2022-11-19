import './User.css'
import React from 'react'

const User = ({name,location }) => {
  return (
    <div className='user'>
      <p>{name.title} {name.first} {name.last}</p>
      <p>{location.country}</p>
      
     
    </div>
  )
}

export default User

