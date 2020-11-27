import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Player from "./Components/Player.jsx"
import Home from "./Components/Home.jsx"
import SideBar from "./Components/SideBar.jsx"


function App() {
  return (
    <>
    <Router>
 
      <SideBar/>
      <Route path="/" exact Component= {Home}/> 
      <Player/>
      <Route path="/library" exact component={Library} />
      <Route path="/search" exact component={Search} />
    </Router>
    
    </>
  );
}

export default App;
