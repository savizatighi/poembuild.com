import TextField from '@material-ui/core/TextField';
import logo from './logo.svg';
import './App.css';

const getRhymes = ((word) => {
  fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
  .then(response => response.json())
  .then(data => console.log(data));
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="poembuildlogo.png"/>
      <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="type"
          multiline
          variant="outlined"
          class="input"
          onChange={(event) => getRhymes(event.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
<p>hi web</p>