import './App.css';
import './AppIndex.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header title="React Demo Website 1.0.3"/>
      <header>
        <p>
          Introduction to React 18+
        </p> 
      </header>
      <div className='output1'>
      </div>
      <div className="action">
          <button>ex1</button>
          <button>ex2</button>
      </div>
    </div>
  );
}

export default App;
