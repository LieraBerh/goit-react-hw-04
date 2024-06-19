/* eslint-disable react/prop-types */

import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      toast("Please enter search term", {
        style: {
          background: "pink",
        },
      });
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.submit_btn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};
export default SearchBar;
