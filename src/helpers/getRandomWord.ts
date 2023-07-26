type WordAndClue = {
    word: string,
    clue: string
  }
  
  let wordsAndClues: WordAndClue[] = [
    { word: 'COMPUTADORA', clue: 'Sin corazón ni sentimientos, pero con información y conocimientos' },
    { word: 'AGUACATE', clue: 'Agua pasa por mi casa cate de mi corazon' },
    { word: 'TELEFONO', clue: 'Ring Ring contesta' },
    { word: 'MANZANA', clue: 'Roja o amarilla, jugosa y dulce, alimento que siempre seduce' },
    { word: 'PERA', clue: 'Espera...' },
    { word: 'GATO', clue: 'Tiene bigotes y ronronea, caza ratones y se asea' },
    { word: 'TRECE', clue: 'En la suerte y el azar, mi número es un desafío, con una pata alzada, voy de equilibrio en el río' },
    { word: 'AMOR', clue: 'El sentimiento universal que todo ser humano tiene quizá...' },
    { word: 'LOBO', clue: 'Ando de noche y aúllo a la luna, cazador feroz de la noche oscura' },
    { word: 'PROGRAMACION', clue: 'Soy como un lenguaje mágico, ordeno a las máquinas hacer trucos fantásticos' }
  ]
  
  export function getRandomIndex(){
    const randomIndex = Math.floor(Math.random() * wordsAndClues.length);
    return randomIndex;
  }
  
  export function getRandomWord(){
    return wordsAndClues[getRandomIndex()];
  }
  