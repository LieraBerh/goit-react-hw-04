/* eslint-disable react/prop-types */
import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, handleModalOpen }) => {
  return (
    <div className={s.img_wrapper}>
      <img
        src={src.small}
        alt={alt}
        onClick={() => handleModalOpen({ src: src.regular, alt })}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
