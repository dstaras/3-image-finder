import React from "react";
import styled from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images, onClick }) => {
  const { webformatURL, tags, id } = images;
  return (
    <li className={styled.ImageGalleryItem}>
      <img
        data-imageid={id}
        src={webformatURL}
        alt={tags}
        onClick={onClick}
        className={styled.ImageGalleryItemImage}
        width="300"
        height="200"
      />
    </li>
  );
};

export default ImageGalleryItem;
