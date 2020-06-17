import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { IMAGE_BASE_URL } from "./config";
import "./MainImage.css";

const MainImage = ({ props }) => {
  const [imageIndex, setImageindex] = useState(0);

  const imageLeftSliding = () => {
    if (imageIndex === 0) {
      setImageindex(4);
    } else {
      setImageindex(imageIndex - 1);
    }
    console.log(imageIndex);
  };

  const imageRightSliding = () => {
    if (imageIndex === 4) {
      setImageindex(0);
    } else {
      setImageindex(imageIndex + 1);
    }
    console.log(imageIndex);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${IMAGE_BASE_URL}original${props[imageIndex].backdrop_path}')`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat",
        }}
        className="mainImage"
      ></div>
      <button className="leftButton" onClick={imageLeftSliding}>
        <AiOutlineLeft size={40} />
      </button>
      <button className="rightButton" onClick={imageRightSliding}>
        <AiOutlineRight size={40} />
      </button>
      <div className="mainContext">
        <h1>{props[imageIndex].original_title}</h1>
        <p>{props[imageIndex].overview}</p>
      </div>
    </>
  );
};

export default MainImage;
