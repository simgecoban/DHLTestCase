import React from 'react'

const Age = ({dob}) => {
  return (
    <div className='phoneNumber'>
        <p> Age </p>
       <p> {dob.age} </p>
    </div>
  )
}

export default Age
