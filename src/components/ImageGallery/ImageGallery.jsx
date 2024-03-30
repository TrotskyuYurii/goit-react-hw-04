import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ Images, onClickOnImage }) => {

  console.log(Images);

  return (
    <ul className={css.ImageGalleryUl}>
      {Images.map((image) => (
        <li className={css.ImageCardLi} key={image.id}>
          <ImageCard
            key={image.id}
            smallImage={image.urls.small}
            alt_description={image.alt_description}
            onClickOnImage={onClickOnImage}
            bigImage = {image.urls.full}
          />
        </li>
      ))}
    </ul>
  );
  
};

export default ImageGallery;
