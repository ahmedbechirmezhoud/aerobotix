import React from 'react'
import './bluebg.scss'

import bluelayeredwaves from '../../assets/bg/blue-layered-waves.svg'
import blueWaves from '../../assets/bg/blue-waves.svg'


function BlueBg(){
    return (
        <div className="bluebgwarpper">
            <img className="startwaves" src={bluelayeredwaves} alt="" />
            <div className="bluebg"></div>
            <img className="endwave" src={blueWaves} alt="" />
        </div>
    )
}


export default BlueBg