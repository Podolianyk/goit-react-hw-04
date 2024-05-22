import css from "./ImageGallery.module.css";
import ImageCard from "./../ImageCard/ImageCard";

export default function ImageGaller({ images, openModal, onAfterOpen }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.list_item} key={image.id}>
          <ImageCard
            image={image}
            openModal={openModal}
            onAfterOpen={onAfterOpen}
          />
        </li>
      ))}
    </ul>
  );
}
