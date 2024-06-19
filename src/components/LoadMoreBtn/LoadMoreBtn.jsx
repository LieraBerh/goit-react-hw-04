/* eslint-disable react/prop-types */
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.load_more_btn}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
