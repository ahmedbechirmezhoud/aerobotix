import React from 'react'
import './redBg.scss'

import waves from '../../assets/bg/waves.svg'
import layeredwaves from '../../assets/bg/layered-waves.svg'

function RedBg(){
    return(
        <div className="redbgwarpper">
        <div className="redbg">
            <img src={waves} alt="" />
            <div className="red"></div>
        </div>
        <img className="endwaves" src={layeredwaves} alt="" />
        </div>
    )
}


export default RedBg