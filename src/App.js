import './App.css';
import Landing from './Pages/landing';
import Character from './Pages/character';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
// import { UserContext } from './utils/UserContext';
// import { useState } from 'react';
const App = () => {
  // const [ value, SetValue ] = useState(null);
  return (
    <Router>
      {/* <UserContext.Provider value={{value,SetValue}}> */}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/character/:id" element={<Character/>}/>
        </Routes>
      {/* </UserContext.Provider> */}
    </Router>
  );
}

export default App;
