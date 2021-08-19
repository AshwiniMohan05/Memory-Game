function shuffle(array){
    var currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function initializeDeck() {
    let id = 0;
    const cards = [
        'signal','snapchat','xing', 'linkedIn',  'reddit', 'pintrest', 'youtube', 
    ].reduce((acc, type) => {
        acc.push(
            {
                id: id++,
                type
            }
        )
        acc.push(
            {
                id: id++,
                type
            }
        )
        return acc
    }, [])

    return shuffle(cards)
}