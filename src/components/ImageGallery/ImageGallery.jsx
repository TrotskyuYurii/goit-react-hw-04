import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <ul className={css.ImageGalleryUl}>
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};

export default ImageGallery;
