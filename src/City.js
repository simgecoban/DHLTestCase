import React from 'react'

const City = ({ location }) => (
    <div className="phoneNumber">
        <p>City</p>
        <div className='secondDiv'>
        <p>{location.city}</p>
        </div>
    </div>
);

export default City
