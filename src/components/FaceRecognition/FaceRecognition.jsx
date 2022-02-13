import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center  ma">
      <div className="absolute mt3">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width={"500px"}
          height={"auto"}
        />
        <div
          className="bounding-box"
          style={{
            top: box.distImgTopToFaceTop,
            right: box.distImgRightToFaceRight,
            bottom: box.distImgBottomToFaceBottom,
            left: box.distImgLeftToFaceLeft,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
