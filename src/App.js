import TextField from '@material-ui/core/TextField';
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
      <TextField
          id="outlined-textarea"
          placeholder="Write Your Poem"
          multiline
          variant="outlined"
          className="input"
          onChange={(event) => getRhymes(event.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
<p>hi web</p>