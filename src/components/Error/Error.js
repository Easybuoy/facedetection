import React from 'react';
import './Error.css';
const Error = (props) => {
   
    return (
        <div className = "container">
        <div className = "w-20 pa2 fl" id="error">
       <p className="w-90 ba br2 pa3 ma2 green bg-washed-green" >
        <strong>Well done!</strong> You successfully read this important alert message.
    </p>
        </div>
        </div>
    );
}


export default Error;