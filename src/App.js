import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Players from './components/Players';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Players/>
        <Footer/>
    </div>
  );
}

export default App;
