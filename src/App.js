import './App.css';
//components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboat from "./components/Aboat";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Fotter from "./components/Fotter";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Aboat/>
      <Events/>
      <Contact/>
      <Fotter/>
    </div>
  );
}

export default App;
