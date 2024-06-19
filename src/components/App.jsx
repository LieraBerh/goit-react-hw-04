import fetchPhotosWithQuery from "../services/unsplashApi";
import "./App.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setQuery(topic);
      setPhotos([]);
      setError(false);
      setLoading(true);
      setPage(1);
      setIsEmpty(false);
      setShowLoadMore(false);
      const { results, total_pages } = await fetchPhotosWithQuery(topic, page);
      if (!results || results.length === 0) {
        setIsEmpty(true);
        return;
      }
      setPhotos((prev) => [...prev, ...results]);
      setShowLoadMore(page < total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      setLoading(true);
      const { results, total_pages } = await fetchPhotosWithQuery(
        query,
        nextPage
      );
      if (!results || results.length === 0) {
        setIsEmpty(true);
        setShowLoadMore(false);
        return;
      }
      setPhotos((prev) => [...prev, ...results]);
      setShowLoadMore(nextPage < total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleModalOpen = (img) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {isEmpty && (
        <p className="no_result_msg">
          No results for query: &nbsp;
          <span className="no_result_msg_span">{query}</span>
        </p>
      )}
      {photos?.length > 0 && (
        <ImageGallery items={photos} handleModalOpen={handleModalOpen} />
      )}
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectImg={selectImg}
      />
    </>
  );
}

export default App;
