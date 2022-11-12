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
      newGrid[pointer.y][pointer.x] = { ...newGrid[pointer.x][pointer.y], value: key };
      updateGrid(newGrid)
      setPointer({ ...pointer, x: pointer.x + 1 })
    }
  }
  const enterHandler = () => {
    if (pointer.x === SIZE && pointer.y < 6) {
      console.log('d')
      const finalWord = makeWord()
      if (isvalidWord(finalWord)) {

      } else {
        setStatus('Invalid word. Go buy a dictionary!!')
      }
      setPointer({ x: 0, y: pointer.y + 1 })
    }

  }

  console.log(CHOOSEN_WORD);

  return (
    <div className="App">
      <div className="header">
        <div className='title'>Wordle 2.0</div>
        <div className='subtitle'>Made with &#9829; by Sid</div>
      </div>
      <div className='status'>{status}</div>
      <DisplayGrid grid={grid} size={SIZE} />
      <Keyboard enterEnabled={pointer.x === SIZE && pointer.y < 6} clickHandler={handleKeyboardEvent} enterHandler={enterHandler} />
    </div>

  );
}

export default App;
