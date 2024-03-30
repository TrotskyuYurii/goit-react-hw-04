import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ Images, onClickOnImage }) => {

  return (
    <ul className={css.ImageGalleryUl}>
      {Images.map((image) => (
        <li className={css.ImageCardLi} key={image.id}>
          <ImageCard
            key={image.id}
            src={image.urls.regular}
            alt_description={image.alt_description}
            onClickOnImage={onClickOnImage}
          />
        </li>
      ))}
    </ul>
  );
  
};

export default ImageGallery;
