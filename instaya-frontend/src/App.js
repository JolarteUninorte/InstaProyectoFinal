import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Login from './components/auth/login';
import OrdersHome from './components/orders/orders-home';
import Register from './components/register/register';
import OrdersRegister from './components/orders/orders-register';
import OrdersUpdate from './components/orders/orders-update';
import Index from './components/index';
import Navbar from './components/navbar';
import { useState } from 'react';
import Guard from './components/auth/guard';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUser(true)
    } else {
      setUser(false)
    }
  }, [location])
  return (
    <div className="App">
   
        <Navbar userProps={user}></Navbar>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/orders-home" element={<Guard isAllowed={user}><OrdersHome></OrdersHome></Guard>}></Route>
          <Route path="/orders-register" element={<Guard isAllowed={user}><OrdersRegister></OrdersRegister></Guard>}></Route>
          <Route path="/orders/:id/update" element={<Guard isAllowed={user}><OrdersUpdate></OrdersUpdate></Guard>}></Route>
        </Routes> 
    
    </div>
  );
}

export default App;
