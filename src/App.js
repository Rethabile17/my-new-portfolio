import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/footer';
import Nav from   './Components/Nav';  

function App() {


  return (
    <div className="App">
       <Nav/>
  <Header/>
  <About/>
  <Projects/>
  <Footer/>
    </div>
  );
}

export default App;
