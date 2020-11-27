import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Route path="/" exact Component= {Home}/> 
      <Player/>
    </Router>
    
    </>
  );
}

export default App;
