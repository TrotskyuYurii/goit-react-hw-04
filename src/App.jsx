/* eslint-disable no-inner-declarations */
import { useState, useEffect } from "react";
import "./App.css";
import { requestProductsByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'

function App() {

  const [IsLoad, setIsLoad] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [searchImage, setSearchImage] = useState("");
  const [ImagesData, setImagesData] = useState(null);
  
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
          // console.log(data);
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

  
  

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {IsLoad && <Loader />}
      {IsError && <ErrorMessage />}
      {ImagesData && <ImageGallery Images={ImagesData}/>}
    </>
  );
}

export default App;
