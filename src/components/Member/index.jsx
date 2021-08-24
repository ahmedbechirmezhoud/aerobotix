import React from 'react' 
import './member.scss'

function Member({ fullname, image, role }){
    return (
        <div className="member">
            <svg width="50" height="168" viewBox="0 0 50 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41 13H18.9722L15 24.6962V145" stroke="white" strokeWidth="5"/>
                <path d="M50 3H11.875L5 16.8228V159" stroke="white" strokeWidth="5"/>
                <circle cx="5.5" cy="162.5" r="4" stroke="white" strokeWidth="3"/>
                <circle cx="15.5" cy="148.5" r="4" stroke="white" strokeWidth="3"/>
            </svg>
            <img 
                src={image || "https://karateinthewoodlands.com/wp-content/uploads/2017/09/default-user-image-300x300.png"}
                alt={"Ahmed Bechir Mezhoud"}
            />
            <h3> {fullname} </h3>
            <p>{role}</p>
        </div>
    )
}

export default Member