import React from "react";
import styled from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images, onClick }) => {
  const { webformatURL, tags, id } = images;
  return (
    <li className={styled.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(id)}
        className={styled.ImageGalleryItemImage}
        width="300"
        height="200"
      />
    </li>
  );
};

export default ImageGalleryItem;
