import React from 'react'
import Navbar from './Navbar';
import '../src/css/homepage.css';
import Frontup from './Frontup';
import FrontMiddle from './FrontMiddle';
import Footer from './Footer';
function Homepage() {
    return (
        <div className='front'>
            <div className='menubar'>
                <Navbar />
            </div>
           <Frontup />
           <FrontMiddle/>
           <Footer/>
        </div>

    )
}

export default Homepage
