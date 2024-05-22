import css from "./ImageCard.module.css";

export default function ImageCard({ image, openModal, onAfterOpen }) {
  const handleClick = () => {
    openModal();
    onAfterOpen(image);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        className={css.image_item}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
