import ImageCard from "./../ImageCard/ImageCard";

export default function ImageGaller({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          description={image.description}
          urls={image.urls}
        />
      ))}
    </ul>
  );
}
