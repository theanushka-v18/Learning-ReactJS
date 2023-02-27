import React from 'react'
import "./Vedio.css";

const Vedio = (props) => {
    let className = "bgcolor";
    return (
        <>
            <img src={props.src} alt={props.title} />
            <h2 className={className}>{props.title}</h2>
        </>
    )
}

export default Vedio

// JSX --> Syntax extension for javascript that allow you to write HTML like code inside Javascript file
// JSX --> for multiple JSX there must be one parent element present, so you can use either <div></div> or React Fragment (i.e, empty tag <></>)
// Components --> Functions that returns UI
// Props --> Props that can be passed to the component and these are only read only, we can also use this as in a destructure way
