import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featured-item'>
            <img className='featured-img' src={require("../../images/download (1).jpg")}/>
            <div className='featured-titles'>
                <h1>Islambad</h1>
                <h2>Capital of Pakistan</h2>
            </div>
        </div>
        <div className='featured-item'>
            <img className='featured-img' src={require("../../images/images (1).jpg")}/>
            <div className='featured-titles'>
                <h1>Lahore</h1>
                <h2>Heart of Pakistan</h2>
            </div>
        </div>
        <div className='featured-item'>
            <img className='featured-img' src={require("../../images/download (3).jpg")}/>
            <div className='featured-titles'>
                <h1>Karachi</h1>
                <h2>City of Lights</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Featured