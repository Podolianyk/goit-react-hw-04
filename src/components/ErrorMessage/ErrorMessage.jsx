import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <p className={css.error}>This is an error! Please try again later.</p>;
}
