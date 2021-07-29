import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import styled from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick, innerRef }) => {
  if (!Array.isArray(images)) {
    return null;
  }
  return (
    <ul className={styled.ImageGallery} ref={innerRef}>
      {images.map((image) => {
        return (
          <ImageGalleryItem images={image} onClick={onClick} key={image.id} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
