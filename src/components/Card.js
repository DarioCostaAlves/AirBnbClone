import React from 'react'
import mountain from '../assets/mountain.png'
import star from '../assets/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={mountain} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )

}