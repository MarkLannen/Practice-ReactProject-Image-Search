import React from "react";
const ImageShow = ({ image }) => {
  return (
    <div>
      {image.id}, {image.alt_description}
    </div>
  );
};
export default ImageShow;
