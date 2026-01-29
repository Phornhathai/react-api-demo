import type { Image } from "../types";

interface ImageShowProps {
  image: Image;
}
// destructure props to get image url
export default function ImageShow({ image }: ImageShowProps) {
  return (
    <div
      style={{
        marginBottom: "10px",
        overflow: "hidden",
        height: "100%",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <div className="info" style={{ marginBottom: "5px" }}>
        <div>id - {image.id}</div>
        <div>description - {image.alt_description}</div>
      </div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
