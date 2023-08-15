import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onButtonSubmit, onInputChange}) => {
    return (
        <div className="">
            <p className="f3 center">
                {'This Magic Brain will detect elements in your pictures.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input 
                        className="f4 pa2 w-70 center" 
                        type='text' 
                        onChange={onInputChange}/>
                    <button 
                        className="w-30 grow f4 link ph3 pc dib white bg-light-purple"
                        onClick={onButtonSubmit} 
                        >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm