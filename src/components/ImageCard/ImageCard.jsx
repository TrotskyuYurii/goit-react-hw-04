import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({src, alt_description, onClickOnImage}) => {

  const handleClick = () => {
    onClickOnImage(src); // Передача URL зображення при кліці
  };

  return (
    <div>
      <img className={css.imageCard} src={src} alt={alt_description} onClick={handleClick}/>
    </div>
  );
};

export default ImageCard;
