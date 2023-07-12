import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import getRandomWord from "./helpers/getRandomWord";

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  useEffect(() => {
    if (attempts === 9) {
      setLost(true);
    }
  }, [attempts]);

  useEffect(() => {
    if (hiddenWord.split(" ").join("") === word) {
      setWon(true);
    }
  }, [hiddenWord, word]);

  const checkLetter = (letter: string) => {
    if (won || lost) {
      return;
    }

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
    }

    const newHiddenWord = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newHiddenWord[i] = letter;
      }
    }

    setHiddenWord(newHiddenWord.join(" "));
  };

  const resetGame = () => {
    const newWord = getRandomWord();

    setWord(getRandomWord());
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setWon(false);
    setLost(false);
  };

  return (
    <>
      <HangImage imageNumber={attempts} />

      <h2>{hiddenWord}</h2>

      <h2> Intentos: {attempts}</h2>

      {won && <h2>¡Ganaste!</h2>}
      {lost && <h2>¡Perdiste!</h2>}

      {letters.map((letter) => (
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}

      <br />
      <br />

      <button onClick={resetGame}>Reiniciar juego</button>
    </>
  );
}

export default App;
