import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Apresentation} from './pages/Home/Apresentation'
import {Apresentation2} from './pages/Home/Apresentation2'
import { Apresentation3 } from './pages/Home/Apresentation3'
import { Apresentation4 } from './pages/Home/Apresentation4'
import { Apresentation5 } from './pages/Home/Apresentation5'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Perfil } from './pages/MainPerfil/Perfil'
import { EditProfile } from './pages/EditProfile/EditProfile'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { SideMenu } from './pages/SideMenu/MenuSide'
import { Bank } from './pages/Bank/Bank'
import { PaymentSuccess } from './pages/Payment/PaymentSuccess'
import { PaymentFail } from './pages/Payment/PaymentFail'
import { AccountDetails } from './pages/AccountDetails/index';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Apresentation" element={<Apresentation/>} />
        <Route path="/Apresentation2" element={<Apresentation2/>} />
        <Route path="/Apresentation3" element={<Apresentation3/>} />
        <Route path="/Apresentation4" element={<Apresentation4/>} />
        <Route path="/Apresentation5" element={<Apresentation5/>} />
        <Route path="/Perfil" element={<Perfil/>} />
        <Route path="/SideMenu" element={<SideMenu/>} />
        <Route path="/EditProfile" element={<EditProfile/>} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess/>} />
        <Route path="/PaymentFail" element={<PaymentFail/>} />
        <Route path="/AccountDetails" element={<AccountDetails/>} />
        <Route path="/Bank" element={<Bank/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)

