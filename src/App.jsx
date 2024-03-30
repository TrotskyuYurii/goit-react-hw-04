/* eslint-disable no-inner-declarations */
import { useState, useEffect } from "react";
import "./App.css";
import { requestProductsByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"

function App() {

  const [IsLoad, setIsLoad] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [searchImage, setSearchImage] = useState("");
  const [ImagesData, setImagesData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  
  // searchBox
  const onSubmit = (eventValue) => {
    setSearchImage(eventValue);
  };


  //request
  useEffect(() => {
    if (searchImage) {

      async function fetchProductsByQuery() {
        try {
          setIsLoad(true);
          const data = await requestProductsByQuery(searchImage);
          setImagesData(data.results);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoad(false);
        }
      }

      fetchProductsByQuery();
    }
  }, [searchImage]);


  //modal
  const onClickOnImage = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {IsLoad && <Loader />}
      {IsError && <ErrorMessage />}
      {ImagesData && <ImageGallery Images={ImagesData} onClickOnImage={onClickOnImage}/>}
      {modalIsOpen && <ImageModal imageUrl={selectedImageUrl} modalIsOpen={modalIsOpen} onRequestClose={closeModal}/>}
      <LoadMoreBtn />
    </>
  );
}

export default App;
