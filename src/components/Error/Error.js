import React from 'react';

const Error = (props) => {
    console.log(props)
    console.log(this.children)
    console.log('sa');
    triggerError()
    return (

        <div className = "w-20 pa2 fl">
        {/* {() => triggerError()} */}
        </div>
    );
}

const triggerError = () => { console.log('a');
<div>
    <p className="w-90 ba br2 pa3 ma2 green bg-washed-green" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
      </p> 
      </div>
}

export default Error;