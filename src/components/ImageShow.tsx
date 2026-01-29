import type { Image } from "../types";

interface ImageShowProps {
  image: Image;
}
// destructure props to get image url
export default function ImageShow({ image }: ImageShowProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        marginBottom: "10px",
        overflow: "hidden",
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
