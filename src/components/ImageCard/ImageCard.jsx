import css from "../ImageCard/ImageCard.module.css";

const ImageCard = ({src, alt_description}) => {

console.log(src);

  return (
    <div>
      <img className={css.imageCard} src={src} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
