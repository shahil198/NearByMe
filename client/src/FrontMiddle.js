import React from 'react'
import './css/frontMiddle.css';
import mid from './css/middle2.jpg';
import {BiTime} from "react-icons/bi";
import {GiReceiveMoney} from "react-icons/gi"
import {GiHealthNormal} from "react-icons/gi"
import {MdNetworkWifi} from "react-icons/md"
function FrontMiddle() {
  return (
    <div className='frontmiddle'>
      <div className='middle-common middle-left'>
        <div className='middle-left-heading'>
          <h2>Welcome to NearByMe</h2>
          <h4>Use NearByMe</h4>
        </div>
        <div className="middle-left-desc">
          <h4 className='middlel'><span><BiTime/> </span>Save your Time</h4>
          <h4 className='middler'><span><GiReceiveMoney/> </span>Save your Money</h4>
          <h4 className='middlel'><pan><MdNetworkWifi/> </pan>Save your Efforts</h4>
          <h4 className='middler'><span><GiHealthNormal/> </span>Save your Energy</h4>
        </div>

      </div>
      <div className='middle-common middle-right'>
        <img src={mid} />
      </div>

    </div>
  )
}

export default FrontMiddle
