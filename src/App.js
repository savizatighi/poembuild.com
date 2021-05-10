import React, { useState } from 'react';
 import {TextField, List, ListItem} from '@material-ui/core';
import './App.css';

function App() {
  const [state, setState] = useState([]);
  const getRhymes = ((word) => {
    fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
    .then(response => response.json())
    .then(data => setState(data));
  })
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
      <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="type"
          multiline
          variant="outlined"
          class="input"
          onChange={(event) => getRhymes(event.target.value)}
        />
        <List>
          {state.map((rhyme) => <ListItem>{rhyme.word}</ListItem>)}
        </List>
      </header>
    </div>
  );
}

export default App;
<p>hi web</p>
