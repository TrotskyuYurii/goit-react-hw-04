import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ Images, onClickOnImage }) => {
  // Внутрішній лічильник для генерації унікальних ключів (була постіно проблема унікальниіх ключів при повторному натисканні серач після натискання лоадМоре)
  let keyCounter = 0;

  return (
    <ul className={css.ImageGalleryUl}>
      {Images.map((image) => (
        <li className={css.ImageCardLi} key={getKey()}>
          <ImageCard
            key={getKey()} // Унікальний ключ для кожного ImageCard
            smallImage={image.urls.small}
            alt_description={image.alt_description}
            onClickOnImage={onClickOnImage}
            bigImage={image.urls.regular}
          />
        </li>
      ))}
    </ul>
  );

  // Функція для генерації унікального ключа
  function getKey() {
    return keyCounter++;
  }
};

export default ImageGallery;
