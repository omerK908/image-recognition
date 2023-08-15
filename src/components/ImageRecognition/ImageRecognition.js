import React from "react";
import './ImageRecognition.css';

const ImageRecognition = ({ imageUrl , imageConcepts}) => {
    return (
        <div className="center" style={{marginTop: 20}}>
            <div className="image-container">
                <img alt="" src={imageUrl} />
            </div>
            <div className="concepts-container">
                {
                    imageConcepts.map((item, index) => (
                    <div className="concept" key={index}>
                        {imageConcepts.length > 1 && index + 1 + ". "}
                        {item}
                    </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ImageRecognition;