import React from 'react'
import './stat.scss'

function Stat({ number, icon, fullname }){
    return (
        <div className="stat">
            <p className="number">{number}</p>
            {icon}
            <p className="fullname">{fullname}</p>
        </div>
    )
}


export default Stat