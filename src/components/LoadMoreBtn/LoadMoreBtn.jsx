import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children, onClick }) {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
}
