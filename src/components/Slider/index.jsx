import React, { useEffect, useState } from 'react'
import './slider.scss'

function Slider({ images, height, width }){

    const [active, setActive] = useState(0)

    const increment = () => {
        if(active === (images.length - 1))
            setActive(0)
        else
            setActive(active + 1)
    }

    const decrement = () => {
        if(active === 0)
            setActive((images.length - 1))
        else
            setActive(active -1)
    }


    return (
        <div id="carouselExampleControls" style={{ maxHeight : height || "98%", maxWidth : width || "98%" }} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" >
            {images && images.map((image , idx) => (
             <div key={idx}  className={ idx!==active ? "carousel-item" : "carousel-item active"} >
                <img src={image} className="d-block w-100" alt={idx} />
              </div>
            ))}
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" onClick={increment} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={decrement} >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Slider