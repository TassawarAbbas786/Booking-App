import React from 'react'
import './searchitems.css'

const SearchItems = () => {
  return (
    <div className='search-items'>
        <img src={require("../../images/hydrabad.jpg")} alt='hydrabad' className='search-items-img' />
        <div className='search-items-description'>
            <h1 className='search-items-title'>Hydrabad Main block</h1>
            <span className='search-items-distance'>500m from dha</span>
            <span className='search-items-taxi-option'>Free Airport Taxi</span>
            <span className='search-items-subtitles'>Studio Apartments with air condition</span>
            <span className='search-items-features'>
                Entire Studio . 1 bathroom .21m 1 full bed
            </span>
            <span className='search-items-cancel-opt'>
                Free Cancellation
            </span>
            <span className='search-items-cancel-subtitles'>
                You can cancel later, so lock in this price today!
            </span>
        </div>
        <div className='search-items-details'>
            <div className="search-items-rating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='search-items-texts'>
                <span className='search-items-price'>$123</span>
                <span className='search-items-tax-optn'>Include taxes and fees</span>
                <button className='search-items-check-btn'>See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItems