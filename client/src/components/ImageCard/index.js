import React from "react";
import "./style.css";

function ImageCard(props) {
    return (

        <img key={props.key} src={props.src} alt="Image_Error" className="img-thumbnail my-3 mx-3 image-click">
        </img>

    );
}

export default ImageCard;