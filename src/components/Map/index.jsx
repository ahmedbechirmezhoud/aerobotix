import React from 'react'
import insatWall from '../../assets/insatWall.jpg'
import './map.scss'


function Map(){
    return (
    <div className="map">
        <iframe className="gmap" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.9745244122564!2d10.194453215648428!3d36.843086172983334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd358494b3bb8d%3A0xd34b814547496489!2sAeRobotix%20INSAT!5e0!3m2!1sen!2stn!4v1629334400815!5m2!1sen!2stn" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        <img src={insatWall} alt="wall" />
    </div>)
}

export default Map