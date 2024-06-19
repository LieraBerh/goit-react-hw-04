/* eslint-disable react/prop-types */
import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, handleModalOpen }) => {
  return (
    <ul className={s.gallery}>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id} className={s.gallery_item}>
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
