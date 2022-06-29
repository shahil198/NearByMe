import React, {useState} from 'react'
import Navbar from './Navbar'
import './css/login.css'
import Footer from './Footer'
const Login = () => {

  const [user,setUser]=useState({email:"",password:""});
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const url = '/api/auth';
    fetch(url, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
    .then(data => {
      if(data.success && data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = "/profile";
      } else {
        setError(data.error);
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    });
  }


  return (
    <div className='login-container'>
      <Navbar/>
      <div className='login-form-container'>
        <form className='login-form' onSubmit={onSubmit}>
          <h3>Please Login</h3>
          {error && <h4 style={{"text-align":"center","color":"red"}}>{error}</h4>}
          <input type="email" placeholder='please enter your mail' className='login-form-input' value={user.email}
                 onChange={(e) => {setUser({...user, email: e.target.value})}}></input>
          <input type="password" placeholder='please enter your password' className='login-form-input' value={user.password}
                 onChange={(e) => {setUser({...user, password: e.target.value})}}></input>
          <button className='login-form-button' id="login-form-button">Login</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
