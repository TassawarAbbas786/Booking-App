import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='featured-properties'>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi1.jpg")} />
                <span className='featured-properties-name'>Kolachi Resturant</span>
                <span className='featured-properties-city'>Karachi Dodarya</span>
                <span className='featured-properties-price'>Starting from $40</span>
                <div className='featured-properties-rating'>
                    <button>5.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi2.jpg")} />
                <span className='featured-properties-name'>Charcol BBQ & Grill Resturent</span>
                <span className='featured-properties-city'>Karachi Dodarya</span>
                <span className='featured-properties-price'>Starting from $50</span>
                <div className='featured-properties-rating'>
                    <button>6.3</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi3.jpg")} />
                <span className='featured-properties-name'>Marriot Hotel</span>
                <span className='featured-properties-city'>Karachi</span>
                <span className='featured-properties-price'>Starting from $35</span>
                <div className='featured-properties-rating'>
                    <button>5.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='featured-properties-items'>
                <img className='featured-properties-img' src={require("../../images/karachi4.jpg")} />
                <span className='featured-properties-name'>Carlton Hotel</span>
                <span className='featured-properties-city'>Karachi</span>
                <span className='featured-properties-price'>Starting from $40</span>
                <div className='featured-properties-rating'>
                    <button>6.1</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties