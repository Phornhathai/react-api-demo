import React from "react";

interface ImageShowProps {

  image: string;
}
// destructure props to get image url
export default function ImageShow({ image }: ImageShowProps) {
  return <div>url {image} </div>;
}
