import React from 'react'
import './css/footer.css'
import { GoLocation } from "react-icons/go";
import { MdPeopleOutline } from "react-icons/md";
import { SiHandshake } from "react-icons/si";
import {FiPhoneCall} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {AiFillLinkedin} from "react-icons/ai";

function Footer() {
    return (
        <div className='main-footer'>

            <div className='footer-up'>
                <div className='footer-up-left'>
                    <div className='topic-left'>
                        <h4><GoLocation />Location</h4>
                    </div>
                    <div className='desc-left'>
                        <p>MMMUT, KunraGhat <br />Gorakhpur, U.P.<br />
                            India.<br />
                            pin: 273010<br />
                        </p>
                    </div>
                </div>


                <div className='footer-up-mid'>
                    <div className='topic-mid'>
                        <h4><MdPeopleOutline />communities</h4>
                    </div>
                    <div className='mid-all'>
                        <ul>
                            <li>Maid</li>
                            <li>Plumber</li>
                            <li>Cook</li>
                            <li>Carpanter</li>
                            <li>Electrician</li>
                            <li>Painter...</li>

                        </ul>
                    </div>
                </div>


                <div className='footer-up-right'>
                    <div className='topic-right'>
                        <h4><SiHandshake />Get in touch</h4>
                    </div>
                    <div className='desc-right'>
                        <div className='footer-right-up'>
                       <p> <span><FiPhoneCall/> </span>(+91) 8874773222</p>
                       <p> <span><HiOutlineMail/> </span>shahil198.sv@gmail.com</p>
                       <p> <span><AiFillLinkedin/> </span>https://bit.ly/3wwenCU</p>
                        </div>
                       
                    </div>
                </div>

            </div>



            <div className='footer-down'>
                <p>Created by Shahil and Team.<span> &copy; </span>2022</p>
            </div>
            {/* <h1>This is footer</h1> */}
            {/* isme teen division honge */}
            {/* get in touch , menu, services */}
            {/* aur ek div isi me neeche hoga copyright ke liye */}


        </div>
    )
}

export default Footer;
