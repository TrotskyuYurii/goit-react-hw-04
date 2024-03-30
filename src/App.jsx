import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  // Пошукові дані
  const [searchImage, setSearchImage] = useState("");

  // Обробка введення даних пошуку
  const onSubmit = (eventValue) => {
    setSearchImage(eventValue);
  };

  // Ефект для відстеження змін у змінній SearchImage
  useEffect(() => {
    console.log('Нове значення у змінній SearchImage:', searchImage);
  }, [searchImage]); 

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
