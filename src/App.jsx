import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { requestProductsByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [IsLoad, setIsLoad] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [searchImage, setSearchImage] = useState("");
  const [ImagesData, setImagesData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [totalImageOnApi, setTotalImageOnApi] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const IMAGE_PER_PAGE = 12;

  // searchBox
  const onSubmit = (eventValue) => {
    setSearchImage(eventValue);
    setCurrentPage(1);
  };

  // Memoized function to handle requestProductsByQuery
  const fetchData = useMemo(() => async () => {
    if (searchImage) {
      try {
        setIsLoad(true);
        const data = await requestProductsByQuery(searchImage, IMAGE_PER_PAGE, currentPage);
        setImagesData(prevImagesData => [...prevImagesData, ...data.results]); 
        setTotalImageOnApi(data.total);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    }
  }, [searchImage, currentPage]);

  // Clear ImagesData when searchImage changes
  useEffect(() => {
    setImagesData([]);
  }, [searchImage]);

  // request
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // modal
  const onClickOnImage = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // load more
  const onClickLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {IsLoad && <Loader />}
      {IsError && <ErrorMessage />}
      {ImagesData && <ImageGallery Images={ImagesData} onClickOnImage={onClickOnImage} />}
      {modalIsOpen && <ImageModal imageUrl={selectedImageUrl} modalIsOpen={modalIsOpen} onRequestClose={closeModal} />}
      {(currentPage * IMAGE_PER_PAGE < totalImageOnApi) && <LoadMoreBtn onClickLoadMore={onClickLoadMore} />}
    </>
  );
}

export default App;
