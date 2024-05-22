import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <Bars
      className={css.loader}
      height="80"
      width="80"
      color="rgb(82, 82, 189)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
