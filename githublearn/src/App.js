import logo from './logo.svg';
import './App.css';
import profile from './assets/rajkumar.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          I am <code>Raj Kumar G</code> - MERN Developer.
        </p>
      </header>
    </div>
  );
}

export default App;
