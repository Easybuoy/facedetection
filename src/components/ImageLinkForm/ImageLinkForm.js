import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div >
           <p className="p3">
                {'This Magic Brain Will Detect Faces In Your Picture. Give It A Try'}           
           </p>

            <div className="center"> 
            <div className="form center pa4 br3 shadow"> 
            <input type="text" className="f4 pa2 w-70 center " onChange={onInputChange}/>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}> Detect </button>
            </div>
            </div>

        </div>
    );
}


export default ImageLinkForm;