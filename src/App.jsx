import { useState, useEffect } from "react";
import "./App.css";
import { requestProductsByQuery } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";

function App() {
  // searchBox
  const [searchImage, setSearchImage] = useState("");

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
          console.log(data);
          // setProducts(data.products);
        } catch (error) {
          // setIsError(true);
        } finally {
          setIsLoad(false);
        }
      }

      fetchProductsByQuery();
    }
  }, [searchImage]);

  //Loader
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {isLoad && <Loader />}
    </>
  );
}

export default App;
