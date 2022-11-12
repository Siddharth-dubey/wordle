import './App.css';
import { DisplayGrid } from './displayGrid';
import { Keyboard } from './keyboard';
import { useEffect, useMemo, useState } from 'react';
import { getWord, isvalidWord } from './utils/wordsHelper';

function App() {

  const SIZE = 5;
  const INIT_MATRIX = Array.from({ length: 6 }, (d, idx) => Array.from({ length: SIZE }, (c, index) => {
    return { value: '', type: 'neutral' }
  }))

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [grid, updateGrid] = useState(INIT_MATRIX);
  const [CHOOSEN_WORD, getNewWord] = useState('');
  const [status, setStatus] = useState('');
  const [gameStatus, setGameStatus] = useState(false);

  useEffect(() => {
    getNewWord(getWord());
  }, [])

  const makeWord = () => {
    const finalWord = grid[pointer.y].reduce(
      (updatedText, currentValue) => updatedText + currentValue.value,
      ''
    );
    return finalWord

  }

  const handleKeyboardEvent = (key) => {
    if (key && pointer.x < SIZE) {
      let newGrid = [...grid];
      newGrid[pointer.y][pointer.x] = { ...newGrid[pointer.y][pointer.x], value: key };
      updateGrid(newGrid)
      setPointer({ ...pointer, x: pointer.x + 1 })
    }
  }
  const handleDelete = () => {
    if (pointer.x !== 0) {
      let newGrid = [...grid];
      newGrid[pointer.y][pointer.x - 1] = { ...newGrid[pointer.y][pointer.x - 1], value: '' };
      setPointer({ ...pointer, x: pointer.x - 1 })
      updateGrid(newGrid)
    }

  }

  const colorRow = (wordStatsArray) => {
    let newGrid = [...grid];
    wordStatsArray.forEach((status, index) => {
      newGrid[pointer.y][index] = { ...newGrid[pointer.y][index], type: status === 2 ? 'perfect' : (status === 1 ? 'good' : 'neutral') };
    })
    updateGrid(newGrid)
  }


  const enterHandler = () => {
    if (pointer.x === SIZE && pointer.y < 6) {
      console.log('d')
      const finalWord = makeWord()
      if (isvalidWord(finalWord)) {
        if (CHOOSEN_WORD === finalWord.toLowerCase()) {
          setStatus('Wohoooo!!!! you are amazing!')
          const wordStats = [2, 2, 2, 2, 2]
          colorRow(wordStats)
          setGameStatus(true);
        } else {
          const splits = CHOOSEN_WORD.split('');
          const wordStats = finalWord.toLowerCase().split('').map((w, index) => {
            if (w === CHOOSEN_WORD[index]) {
              return 2;
            } else if (splits.findIndex((s) => s === w) !== -1) {
              return 1;
            } else {
              return 0;
            }
          })
          colorRow(wordStats)
          setPointer({ x: 0, y: pointer.y + 1 })
        }
      } else {
        setStatus('Disappointing!! Go buy a dictionary!!')
      }
    }
    if (pointer.y === 5 && pointer.x === SIZE) {
      setGameStatus(true);
      setStatus(`LOOSER!! . The word was ${CHOOSEN_WORD}`)
    }

  }

  console.log(CHOOSEN_WORD);
  console.log(grid);

  return (
    <div className="App">
      <div className="header">
        <div className='title'>Wordle 2.0</div>
        <div className='subtitle'>Made with &#9829; by Sid</div>
      </div>
      <div className='status'>{status}</div>
      <DisplayGrid grid={grid} size={SIZE} />
      <div className={gameStatus ? 'disable-keys' : ''}>
        <Keyboard enterEnabled={pointer.x === SIZE && pointer.y < 6} handleDelete={handleDelete} clickHandler={handleKeyboardEvent} enterHandler={enterHandler} />
      </div>
    </div>

  );
}

export default App;
