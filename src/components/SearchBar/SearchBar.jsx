import css from "../SearchBar/SearchBar.module.css";

const SearchBar = ({onSubmit}) => {
  return (
    <header className={css.searchBox}>
      <form onSubmit={onSubmit}>
        <input
          className={css.inputArea}
          type="text"
          name="searchInput"
        //   autocomplete="off"
        //   autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
