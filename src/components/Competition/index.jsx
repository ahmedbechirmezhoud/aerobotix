import React from 'react' 
import './competition.scss'

function Competition({ logo,link, compName, description, color }){

    const colors = {
        blue : "rgba(9, 103, 170, 0.9)",
        red : "rgba(233, 25, 33, 0.9)"
    }

    return(
        <div className="competition" style={{ background: colors[color] }}>
            <img src={logo} alt={compName} />
            <a href={link}  rel="noreferrer" target="_blank"><h2>{compName}</h2></a>
            <p> {description} </p>
        </div>
    )
}

export default Competition