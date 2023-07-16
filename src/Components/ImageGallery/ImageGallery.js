//This code should create a simple image gallery
//that should display a list of photos fetched from a remote API.
//I hope to customize the image gallery by passing different props
//to the ImageGallery component.
//react-image-gallery: https://www.npmjs.com/package/react-image-gallery documentation.

import React from "react";
import ImageGallery from "react-image-gallery";

const App = () => {
  const [photos, setPhotos] = React.useState([]);

  const fetchPhotos = async () => {
    const response = await fetch("https://api.example.com/photos");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <ImageGallery photos={photos} />
    </div>
  );
};

export default App;
