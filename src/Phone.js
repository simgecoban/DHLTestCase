import React from 'react'
import './Phone.css'

const Phone = ({ number }) => (
    <div className="phoneNumber">
        <p>Phone</p>
     <div className='secondDiv'>
        <p > {number}</p>
        </div>
    </div>
);

export default Phone
