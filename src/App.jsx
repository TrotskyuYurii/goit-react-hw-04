import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  // Пошукові данні
  const [SearchImage, setSearchImage] = useState("");

  // Ввод даних пошуку
  const onChangeSearch = (event) => {
    setSearchImage(event.target.value);
  };



  return (
    <>
    <SearchBar onChangeSearch={onChangeSearch}/>
    </>
  )
}

export default App
