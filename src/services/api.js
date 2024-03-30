import axios from "axios";

//Створюємо свій варіант аксіо
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestProductsByQuery = async (
  query = "",
  per_page = 12,
  page = 1
) => {
  const { data } = await instance.get(
    `/search/photos?query=${query}?per_page=${per_page}?page=${page}`
  );

  return data;
};
