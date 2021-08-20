import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({
    handleClick, id, flipped, height, width, type, matchedImages
}) {
    const flippedCardStyle = flipped ? flipped: '';
    const cardView = matchedImages || flipped ? 'card-front-view' : 'card-back-view';
    return(
        <div
        className={`card-container ${flippedCardStyle}`}
        style={{
            width,
            height
        }}
        onClick={() => handleClick(id)}
    >
        <div className="card-flipper">
            <img
                className={`${cardView}`}
                alt=""
                src={flipped || matchedImages ? `/svg/${type}.svg` : '/svg/default.svg'}
                style={{
                    width, height
                }}
            />
        </div>
    </div>
    ) 
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    matchedImages: PropTypes.bool.isRequired
}

