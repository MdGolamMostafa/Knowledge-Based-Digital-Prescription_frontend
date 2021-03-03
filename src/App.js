
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './component/Home/HomePage';

function App() {
  return (
    <div className="App">
      <h1>Bismillah hirrah manir rahim</h1>
        <h3> Smart Prescription</h3>
        {/* <Route exact path="/" component={HomePage} /> */}
       
          <HomePage></HomePage>
      {/* <Router>
        <Switch>
        
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
