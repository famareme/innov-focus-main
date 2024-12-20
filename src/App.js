import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import BlogPublication from './components/BlogPublication';
import Team from './components/Team';

function App() {
  useEffect(() => {
    document.title = "DakarBiodiversite";
  }, [])
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About/></Route> 
        <Route path="/team"><Team /></Route>
        <Route path="/services"><Services /></Route>
        <Route path="/blogPublication"><BlogPublication /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
