import React from 'react'

function Title({title, size, color, style, className}) {

    const sizes = {
        "S" : "24px",
        "M": "46px",
        "L": "6vw"
    }

    const colors = {
        blue : "rgba(9, 103, 170, 0.9)",
        red : "rgba(233, 25, 33, 0.9)"
    }

    const styles = {
        container : {
            position: "relative",
            ...style
        },
        title : {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: sizes[size],//size ? ( String(size) + "px") : "130px",
            position: "absolute",
            width: "auto",
            top: 0,
            left: 0,
            color: "#FFFFFF",
        },
        bg : {
            backgroundColor: color ? colors[color] : "rgba(9, 103, 170, 0.9)",
            width : "calc(  " + (title.length * .47) + " * " + sizes[size] + " + 100px)", // String((60 * (title.length)) + 150 ) + "px",
            maxWidth : "50vw",
            height : sizes[size] // size ? ( String(size) + "px") : "130px",
        }
    }


    return (
        <div className={className} style={styles.container} >
            <h1 style={styles.title} >{title}</h1>
            <div style={styles.bg} ></div>
        </div>
    )
}

export default Title