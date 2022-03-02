import React from 'react'
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./pages/TinderCards";
import FirstnSecond from './pages/FirstnSecond';
import ThirdnFourth from './pages/ThirdnFourth';
import FifthnSix from './pages/FifthnSix';
import NavBar from './components/NavBar';
import LeaderBoard from './pages/LeaderBoard';



function App() {
  return (
    <>
      <Router>
      <Header />  
        <Switch>
          <Route path='/' exact component={TinderCards} />
          <Route path='/FirstnSecond' exact component={FirstnSecond} />
          <Route path='/ThirdnFourth' exact component={ThirdnFourth} />
          <Route path='/FifthnSix' exact component={FifthnSix} />
          <Route path='/LeaderBoard' exact component={LeaderBoard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
//      
