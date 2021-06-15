import React, { useState } from 'react';
 import {TextField, List, ListItem} from '@material-ui/core';
import './App.css';

function App() {
  const [state, setState] = useState([]);
  const selection = window.getSelection().toString();
  
  const getLastWord = (poem) => {
    const indexOfLastSpace = poem.lastIndexOf(" ")
    const indexOfLastLineBreak = poem.indexOf("\n")
    const highestIndex=Math.max(indexOfLastLineBreak, indexOfLastSpace)
    return poem.substr(highestIndex + 1)
}
  const getRhymes = ((word) => {
    fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
    .then(response => response.json())
    .then(data => setState(data));
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>type your poem </h1>
        <h2>highlight a word to see the rhymes</h2>
      <TextField

id="outlined-textarea"
label="Multiline Placeholder"
placeholder="type"
          multiline
          variant="outlined"
          class="input"
          onMouseUp={(event) => getRhymes(getLastWord(window.getSelection().toString()))}

        />
        <List>
          {state.map((rhyme) => <ListItem>{rhyme.word}</ListItem>)}
        </List>
      </header>
    </div>
  );
}

export default App;

