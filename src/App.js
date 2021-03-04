import './App.css';
import {
  BrowserRouter as Router,Route
} from "react-router-dom";
import HomePage from './component/Home/HomePage';
import Prescription from './component/Presciption/Prescription';

function App() {
  return (
    <div className="App">
      <small>Bismillah hirrah manir rahim</small>
        <h3> SMART PRESCRIPTION</h3>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/prescription" component={Prescription} />
      </Router> 
    </div>
  );
}

export default App;
