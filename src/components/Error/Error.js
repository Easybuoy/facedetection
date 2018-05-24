import React from 'react';
const Error = () => {
    return (
        <div className = "w-20 pa2 fl">
        {triggerError()}
        </div>
    );
}

const triggerError = () => {
    <p class="w-90 ba br2 pa3 ma2 green bg-washed-green" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
      </p> 
}

export default Error;