import Header from "./Components/Head/Header";
import Hero from "./Components/Heroo/Hero";
import Companies from "./Components/Company/Companies";
import './App.css'
import Residencies from "./Components/Residency/Residencies";
import Valuee from "./Components/Value/Valuee";
import Contact from "./Components/Contactt/Contact";
import Started from "./Components/Get/Started";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="APP">
      <div>
        <div className="White-Gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Valuee/>
      <Contact/>
      <Started/>
      <Footer/>
    </div>
  );
}

export default App;
