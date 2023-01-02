import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Apresentation} from './pages/Home/Apresentation'
import {Apresentation2} from './pages/Home/Apresentation2'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Perfil } from './pages/MainPerfil/Perfil'
import { Register } from './pages/Register'
import { Login } from './pages/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Apresentation" element={<Apresentation/>} />
        <Route path="/Apresentation2" element={<Apresentation2/>} />
        <Route path="/Perfil" element={<Perfil/>} />

        
      </Routes>
    </Router>

  </React.StrictMode>
)
