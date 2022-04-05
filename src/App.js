import './App.css';
import Landing from './Pages/landing';
import Character from './Pages/character';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Loading from "./Pages/loading";
import { UserContext } from './utils/UserContext';
import { useState } from 'react';

const App = () => {
  
  const [ load, SetLoad ] = useState(true);
  
  return (
    <Router>
      <UserContext.Provider value={{load,SetLoad}}>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/character/:id" element={<Character/>}/>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
