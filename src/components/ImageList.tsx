import ImageShow from "./ImageShow";

interface ImageListProps {
  images: string[];
}

export default function ImageList({ images }: ImageListProps) {
  return (
    <div>
      {images.map((image, index) => {
        return <ImageShow key={index} image={image} />;
      })}
    </div>
  );
}
