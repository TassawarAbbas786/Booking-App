import React from 'react'
import './propertylist.css'

const PropertyList = () => {
  return (
    <div className='property-list'>
        <div className='property-list-item'>
            <img className='plist-img' src={require("../../images/Kalam-Valley-Swat-Khyber-Pakhtunkhwa-1200x500-1.jpg")} />
            <div className='property-list-titles'>
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className='property-list-item'>
            <img className='plist-img' src={require("../../images/hydrabad.jpg")} />
            <div className='property-list-titles'>
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className='property-list-item'>
            <img className='plist-img' src={require("../../images/people_square_saddar_1136x557.jpg")} />
            <div className='property-list-titles'>
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className='property-list-item'>
            <img className='plist-img' src={require("../../images/istockphoto-535695503-612x612.jpg")} />
            <div className='property-list-titles'>
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className='property-list-item'>
            <img className='plist-img' src={require("../../images/download.jpg")} />
            <div className='property-list-titles'>
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList