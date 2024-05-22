import css from "./SearchBar.module.css";
import { RxMagnifyingGlass } from "react-icons/rx";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.topic.value.trim();

    if (!value) {
      return toast.error("This input can't be empty!");
    }
    onSubmit(value);
    event.target.reset();
  };

  return (
    <header className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.inp}
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <RxMagnifyingGlass className={css.image_btn} />
        </button>
      </form>
    </header>
  );
}
