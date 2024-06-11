import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

import Login from './Hairsalon/Login'
import Register from './Hairsalon/Register';
import './index.css';

const App = () => {
  return (
 <>
 <BrowserRouter>
    
    <Routes>
      
        
        <Route path='/Register'element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        
        
        
        
    </Routes>
 </BrowserRouter>
 </>
  )
}

export default App