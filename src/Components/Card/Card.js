import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({
    handleClick, id, flipped, height, width, type, disabled, solved
}) {
    return <div
        className={`flip-container ${flipped ? flipped: ''}`}
        style={{
            width,
            height
        }}
        // onClick={() =>(disabled ? null : handleClick(id))}
        onClick={() => handleClick(id)}
    >
        <div className="flipper">
            <img
                className={solved || flipped ? 'front' : 'back'}
                alt=""
                src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
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
    disabled: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired
}

