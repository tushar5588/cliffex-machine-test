
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Favourite from './components/Favourite';
import Home from './components/Home';
import "./App.css"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/favourite" element={<Favourite/>}/>
        
      </Routes>
    </Router>

  )
};

export default App;
