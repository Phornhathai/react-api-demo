import type { Image } from "../types";
import ImageShow from "./ImageShow";

interface ImageListProps {
  images: Image[];
}



export default function ImageList({ images }: ImageListProps) {
  return (
    <div
      style={{
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        display: "grid",
      }}
    >
      {images.map((image, _) => {
        return <ImageShow key={image.id} image={image} />;
      })}
    </div>
  );
}
