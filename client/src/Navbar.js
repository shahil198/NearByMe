import React, {useState, useEffect} from 'react';
import './css/navbar.css';
import icon2 from './css/icon2.png';
import {Link} from 'react-router-dom';
<style>

</style>
//home about services contact us 

const Navbar = () => {

    useEffect(()=> {
        var token = localStorage.getItem('token');
        if(token) {
            setLoggedin(true);
        }
    },[])

    const [loggedin, setLoggedin] = useState(false);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href='/';
    }

    return (
        <div>
            <body>
                <nav className='navbarr'>
                <div className='container'>
                    <div className='left'>
                        <div className='icon'>
                            <img src={icon2} />
                        </div>
                        <div className='company'>
                        <a><Link to="/"><h3>NearByMe</h3></Link> </a> 
                            {/* <a href="#">
                                <h3>NearByMe</h3>
                            </a> */}
                        </div>

                    </div>




                    <div className='mid'>
                        <ul>
                           <a><Link to="/"><li>Home</li></Link> </a> 
                           <a><Link to="/About"><li>About</li></Link> </a> 
                           {/* <a><Link to="/services"><li>OurTeam</li></Link> </a>  */}
                           <a><Link to="/contactus"><li>Contact US</li></Link> </a> 
                            {/* <a href=""><li></li></a>
                            <a href=""><li></li></a> */}
                        </ul>
                    </div>




                    <div className='right'>
                       {!loggedin && <ul>
                            <Link to="/register"><button className='reg'>Register</button></Link>
                            <Link to="/login"><button className='log'>Login</button></Link>
                        </ul>}
                        {loggedin && <ul>
                            <Link to="/profile"><button className='reg'>Profile</button></Link>
                            <Link to=""><button className='log' onClick={logout}>Logout</button></Link>
                        </ul>}
                    </div>
                </div>
                </nav>
               

            </body>
        </div>
    )
}

export default Navbar;
