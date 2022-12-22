import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Apresentation} from './pages/Home/Apresentation'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Apresentation/>} />

        
      </Routes>
    </Router>

  </React.StrictMode>
)
