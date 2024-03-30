import css from "../SearchBar/SearchBar.module.css";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  
  const handleClick = (event) => {
    event.preventDefault();

    const searchInputValue = event.target.form.elements.searchInput.value.trim();

    if (searchInputValue === "") {
      toast.error("Будь ласка, введіть текст для пошуку зображень.");
      return;
    }

    onSubmit(searchInputValue); // Виклик onSubmit з App.jsx
  };

  return (
    <header className={css.searchBox}>
      <form>
        <input
          className={css.inputArea}
          type="text"
          name="searchInput"
          placeholder="Search images and photos"
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
