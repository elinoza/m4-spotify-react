import React from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {Row,Col} from 'react-bootstrap'


import Player from "./Components/Player.jsx"
import Albumpage from "./Components/Albumpage.jsx"
import Home from "./Components/Home"
import SideBar from "./Components/SideBar.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
   
    <Router>
    <Row>
      <Col md={3} lg={2}>
          <SideBar/>
      </Col>
      <Col md={9} lg={10}>
          <Route path="/" exact  render={(props) => (
              <Home {...props} />)}/>
      </Col>
    </Row>
   
    <Route
      path="/albumpage/:id"
      render={(
      props 
      ) => <Albumpage {...props} />} 
      />
      <Player/>

    </Router>
    
    
  );
}

export default App;
