import { useEffect, useState } from 'react';
import { letters } from './helpers/letters'
import { HangImage } from './components/HangImages';
import { getRandomWord } from './helpers/getRandomWord';
import './App.css';

function App() {

  const [wordAndClue, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(wordAndClue.word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('')
    if (currentHiddenWord === wordAndClue.word) {
      setWon(true);
    }
  }, [hiddenWord])


  const checkLetter = (letter: string) => {

    if (lose) return;
    if (won) return;

    if (!wordAndClue.word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < wordAndClue.word.length; i++) {
      if (wordAndClue.word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));

  }

  const newGame = () => {
    const newWord = getRandomWord();
    const newClue = getRandomWord();
    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.word.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
    setIsVisible(false)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">

      {/* Imagenes*/}
      <HangImage imageNumber={attempts} />

      {/* Palabra Oculta*/}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos*/}
      <h3>Intento: {attempts}</h3>

      {/* Pistas*/}
      <div>
        <button onClick={toggleVisibility}>Pista</button>
        {isVisible ? (
          <h3>{wordAndClue.clue}</h3>
        ) : (
          <h3 style={{ display: 'none' }}>Este es un título oculto</h3>
        )}
      </div>

      {/* Mensaje si Perdio */}
      {
        (lose)
          ? <h2>Has Perdido {wordAndClue.word}</h2>
          : ''
      }

      {/* Mensaje si gano */}
      {
        (won)
          ? <h2>Felicidades Ganaste!!!</h2>
          : ''
      }

      {/* Botones de Letras*/}
      {
        letters.map((letter) => (
          <button
            onClick={() => checkLetter(letter)}
            key={letter}>
            {letter}
          </button>
        ))
      }

      <br /><br />
      <button onClick={newGame}>Nuevo Juego?</button>

    </div>
  )
}

export default App;
