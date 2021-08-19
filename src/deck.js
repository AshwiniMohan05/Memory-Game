function shuffle(array){
    var currentIndex = array.length,  randomIndex;
     // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function initializeDeck() {
    let id = 0;
    const cards = [
        'rails','angular','react', 'php', 'redux',  'javascript', 'ruby', 
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