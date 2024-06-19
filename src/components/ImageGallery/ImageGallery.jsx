/* eslint-disable react/prop-types */
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ items, handleModalOpen }) => {
  return (
    <ul>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard
            src={urls}
            alt={alt_description}
            handleModalOpen={handleModalOpen}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
