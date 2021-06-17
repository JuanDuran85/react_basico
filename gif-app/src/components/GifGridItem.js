import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div className="card animate__animated animate__swing">
            <img src={url} title={title} alt={id}/>
            <p>{title}</p>
        </div>
    )
}
