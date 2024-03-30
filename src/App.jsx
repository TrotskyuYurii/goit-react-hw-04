import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';

function App() {
  
  // searchBox
  const [searchImage, setSearchImage] = useState("");

  const onSubmit = (eventValue) => {
    setSearchImage(eventValue);
  };

  useEffect(() => {
    console.log('Нове значення у змінній SearchImage:', searchImage);
  }, [searchImage]); 

//Loader
  const [isLoad, setIsLoad]=useState(false);

  




  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {isLoad && <Loader />}
    </>
  );
}

export default App;
