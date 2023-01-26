
import React from 'react' ;
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SuccessSign from './components/SuccessSign';
function App() {
 
  return (
    
 <>
 

    
    <div className="App-header"  >
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />}  />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/successSign' element={<SuccessSign />} />

      </Routes>
      </BrowserRouter>
      </div>
      
    </>
  );
}

export default App;
