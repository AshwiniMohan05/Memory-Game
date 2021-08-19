import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

export default function Board({
    cards,
    flipped,
    handleClick,
    disabled,
    solved
}) {
    return <div className="board">
        {
            cards.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  type={card.type}
                  width={200}
                  height={200}
                  flipped={flipped.includes(card.id)}
                  handleClick={handleClick}
                  disabled={disabled}
                  solved={solved.includes(card.id)}
                />
            ))
        }
    </div>
}

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired
}

