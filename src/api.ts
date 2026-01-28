// code related with api requests will go here by using axios
import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2Jz4TZpPXzCuMZqpfOX65OZWPxcJjB7pth4VRhX_veY",
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;
