
import React from 'react'
import '../src/css/App.css';
import Homepage from './Homepage'
import About from './About';
import Profile from './Profile';
import Search from './Search';
import OurTeam from './OurTeam'
import Contactus from './ContactUs'
import Register from './Register'
import Login from './Login'
import Find from './Find'
// import Search from './Search'
import {Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/services" element={<OurTeam/>}></Route>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Search" element={<Search/>} />
    </Routes>
    
  );
}

export default App


// <div>
      // 
    {/* </div> */}