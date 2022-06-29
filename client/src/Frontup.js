import React from 'react'
import './css/frontup.css'
import {Link} from 'react-router-dom'
function Frontup() {
    return (
        <div className='frontup-container'>
            <h2>NEARBYME IS THE FIRST PLATFORM TO FIND</h2>
            <h1>WORKERS</h1>
            <h3>ONLINE IN YOUR AREA</h3>
            <div className="search-btn" id="search-btn">
                <Link to="/search"><button className='aisehe'>Search Now</button></Link>
            </div>
            <div className='frontup-details'>
                <h3>Let's Advertise Your profession Now</h3>
                <p>This is an online platform, Where you can find best daily wage worker in your area easily.
                    <br />
                    If you are a worker you can make your profile here. And let everybody know about your profession.

                </p>
            </div>
        </div>
    )
}

export default Frontup;
