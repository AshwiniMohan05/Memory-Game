import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({
    handleClick, id, flipped, height, width, type, matchedImages
}) {
    return <div
        className={`card-container ${flipped ? flipped: ''}`}
        style={{
            width,
            height
        }}
        // onClick={() =>(disabled ? null : handleClick(id))}
        onClick={() => handleClick(id)}
    >
        <div className="card-flipper">
            <img
                className={matchedImages || flipped ? 'card-front-view' : 'card-back-view'}
                alt=""
                src={flipped || matchedImages ? `/img/${type}.png` : '/img/defaultImage.png'}
                style={{
                    width, height
                }}
            />
        </div>
    </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    matchedImages: PropTypes.bool.isRequired
}

