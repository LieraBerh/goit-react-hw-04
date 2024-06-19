/* eslint-disable react/prop-types */
const ImageCard = ({ src, alt, handleModalOpen }) => {
  return (
    <div>
      <img
        src={src.small}
        alt={alt}
        onClick={() => handleModalOpen({ src: src.regular, alt })}
      />
    </div>
  );
};

export default ImageCard;
