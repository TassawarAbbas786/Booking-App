import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='featured-properties'>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi1.jpg")} />
                <span className='featured-properties-name'>Apart Hotel</span>
                <span className='featured-properties-city'>Karachi</span>
                <span className='featured-properties-price'>Starting from $40</span>
                <div className='featured-properties-rating'>
                    <button>5.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi2.jpg")} />
                <span className='featured-properties-name'>Apart Hotel</span>
                <span className='featured-properties-city'>Karachi</span>
                <span className='featured-properties-price'>Starting from $40</span>
                <div className='featured-properties-rating'>
                    <button>5.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi3.jpg")} />
                <span className='featured-properties-name'>Apart Hotel</span>
                <span className='featured-properties-city'>Karachi</span>
                <span className='featured-properties-price'>Starting from $40</span>
                <div className='featured-properties-rating'>
                    <button>5.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi4.jpg")} />
                <span className='featured-properties-name'>Apart Hotel</span>
                <span className='featured-properties-city'>Karachi</span>
                <span className='featured-properties-price'>Starting from $40</span>
                <div className='featured-properties-rating'>
                    <button>5.7</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties