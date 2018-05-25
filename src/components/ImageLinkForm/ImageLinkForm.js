import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onPictureInputChange, onPictureSubmit}) => {
    return (
        <div >
           <p className="p3">
                {'This App Will Detect Celebrity Images With Picture Provided. Give It A Try....'}           
           </p>

            <div className="center"> 
            <div className="form center pa4 br3 shadow"> 
            <input type="text" className="f4 pa2 w-70 center " onChange={onPictureInputChange} placeholder="Insert Image Url"/>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onPictureSubmit}> Detect </button>
            </div>
            </div>

        </div>
    );
}


export default ImageLinkForm;