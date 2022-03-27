import './App.css';
import Books from './components/Books/Books';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Books></Books>
     <Question></Question>
    </div>
  );
}

export default App;