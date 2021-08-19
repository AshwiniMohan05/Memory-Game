import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import initializeDeck from './deck';

function MemoryGame() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [matchedImages, setMatchedImages] = useState([]);
  const [disabled, setDisabled] = useState([]);

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preLoadedImages()
  },cards)

  const preLoadedImages = () => {
    cards.map(card => {
      const src = `img/${card.type}.png`
      new Image().src = src
    })
  }

  const handleClick = (id) => {
    setDisabled(true)
    if(flipped.length === 0){
      setFlipped([ id])
      setDisabled(false)
    }
    else{
      if(sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if(isMatch(id)){
        setMatchedImages([...matchedImages, flipped[0], id])
        resetCards()
      }
      else {
        setTimeout(resetCards, 2000)
      }
    }
  }  

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const isMatch = id =>{
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type
  }

  const sameCardClicked = id => flipped.includes(id);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        matchedImages={matchedImages}
      />
    </div>
  );
}

export default MemoryGame;
