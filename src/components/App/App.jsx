import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getPhotos } from "./../../api.js";
import SearchBar from "./../SearchBar/SearchBar";
import ImageGallery from "./../ImageGallery/ImageGallery";
import Loader from "./../Loader/Loader.jsx";
import ErrorMessage from "./../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./../ImageModal/ImageModal.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  useEffect(() => {
    if (!query) return;

    async function asyncWrapper() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await getPhotos(query, page);
        setImages((prevState) => [...prevState, ...results]);
        setShowBtn(total_pages && total_pages !== page);
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
  };

  const onHandleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal() {
    setIsOpen(true);
  }

  function onAfterOpen(image) {
    setImageOfModal(image);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      {isError && <ErrorMessage />}
      <Toaster position="top-center" reverseOrder={false} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          onAfterOpen={onAfterOpen}
        />
      )}
      {isLoading && <Loader />}
      {showBtn && (
        <LoadMoreBtn onClick={onHandleLoadMore}>Load more</LoadMoreBtn>
      )}
      {modalIsOpen && (
        <ImageModal
          image={imageOfModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
}
