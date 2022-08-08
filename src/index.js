import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/ForgotPassword'
import './pages/CheckEmail'
import './pages/NewPassword'
import './pages/PasswordReset'
import './pages/Roles'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ForgotPassword from './pages/ForgotPassword'
import CheckEmail from './pages/CheckEmail'
import NewPassword from './pages/NewPassword'
import PasswordReset from './pages/PasswordReset';
import Dashboard from './pages/Dashboard';
import Roles from './pages/Roles';
import Features from './components/Features';
// import ProtectedRoute from './pages/ProtectedRoute';
// import UseAuth from './pages/useAuth'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
     {/* <PrivateRoute component={Dashboard} path="/" /> */}
      <Route path='/' element={<App />} />
      
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/check" element={<CheckEmail />} />
      <Route path="/reset" element={<NewPassword />} />
      <Route path="/new" element={<PasswordReset />} />
      {/* <Route path="/roles" element={<Roles />} /> */}
      
      
      
      {/* <UseAuth path='/'/> */}
    
      <Route path="/dashboard/" element={<Dashboard />} >
        
      <Route path='roles' element={<Roles />}></Route>
        {/* <ProtectedRoute path="/features"  element={Features} auth={false}/> */}
        <Route path='features' element={<Features />}></Route>
        
       </Route>
       </Routes>
  </BrowserRouter>
);
reportWebVitals();














