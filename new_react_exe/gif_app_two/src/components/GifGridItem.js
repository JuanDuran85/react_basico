import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    return (
        <div>
            <img  className="animate__animated animate__bounceInLeft" src={url} alt={title}/>
            <p className="card-text">{title}</p>
        </div>
    )
}
