import { useEffect, useState } from "react";
import SearchBar from "./../SearchBar/SearchBar";
import ImageGallery from "./../ImageGallery/ImageGallery";
import { getPhotos } from "./../../api.js";
import Loader from "./../Loader/Loader.jsx";
import ErrorMessage from "./../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn.jsx";
import { Toaster } from "react-hot-toast";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (query === "") return;

    async function asyncWrapper() {
      try {
        setIsLoading(true);
        const result = await getPhotos(query, page);
        console.log(result);
        setImages((prevState) => [...prevState, ...result.results]);
        setTotalImages(result.total);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [query, page]);

  const getQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const onHandleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={getQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length < totalImages && !isLoading && (
        <LoadMoreBtn onClick={onHandleLoadMore}>Load more</LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Toaster />
    </div>
  );
}
