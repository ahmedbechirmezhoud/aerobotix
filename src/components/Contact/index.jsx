import React from 'react' 
import './contact.scss'

function Contact({ icon, content }){
    return (
        <div className="contact">
            {icon}
            <p>{content}</p>
        </div>
    ) 
}

export default Contact