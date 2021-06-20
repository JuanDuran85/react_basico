import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({id,title,url}) => {
    return (
        <div className="card animate__animated animate__swing">
            <img src={url} title={title} alt={id}/>
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};