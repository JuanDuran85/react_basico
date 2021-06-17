import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div>
            <img src={url} title={title} alt={id}/>
            <p>{title}</p>
        </div>
    )
}
