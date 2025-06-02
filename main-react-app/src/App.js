import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Main App based on React.
        </p>
        <a
          className="App-link"
          href="/vue"
        >
           Link to Sub App
        </a>
      </header>
      <div id="subapp-container"></div>
    </div>
  );
}

export default App;
