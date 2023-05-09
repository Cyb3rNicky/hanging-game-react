type WordAndClue = {
    word: string,
    clue: string
  }
  
  let wordsAndClues: WordAndClue[] = [
    { word: 'COMPUTADORA', clue: 'Es un dispositivo con el cual se creo este juego :)' },
    { word: 'AGUACATE', clue: 'Agua pasa por mi casa cate de mi corazon' },
    { word: 'TELEFONO', clue: 'Ring Ring contesta' },
    { word: 'MANZANA', clue: 'Blanca Nieves se la comio' },
    { word: 'PERA', clue: 'Espera?' },
    { word: 'GATO', clue: 'No se si decirte miau miau jeje' },
    { word: 'TRECE', clue: 'Sabes de que pelicula es Jason?' },
    { word: 'AMOR', clue: 'El sentimiento universal que todo ser humano tiene quiza...' },
    { word: 'LOBO', clue: 'No sera shakira pero si que hace auuuuuu' },
    { word: 'PROGRAMACION', clue: 'Si sabes como se hizo este juego no?' }
  ]
  
  export function getRandomIndex(){
    const randomIndex = Math.floor(Math.random() * wordsAndClues.length);
    return randomIndex;
  }
  
  export function getRandomWord(){
    return wordsAndClues[getRandomIndex()];
  }
  