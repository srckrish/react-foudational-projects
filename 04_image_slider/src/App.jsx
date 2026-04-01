import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function App({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  function handlePreviousSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNextSlide() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (errorMessage !== null) {
    return <div> Error Occured! {errorMessage} </div>;
  }

  return (
    <>
      <div className="wrapper mx-auto max-w-2xl h-screen mt-10">
        <div className="container flex justify-center items-center relative">
          <BsArrowLeftCircleFill
            className="absolute w-7 h-7 text-white drop-shadow-gray-200 left-4"
            onClick={() => handlePreviousSlide()}
          />
          {images && images.length > 0
            ? images.map((imageItem, index) => (
                <img
                  key={imageItem.id}
                  src={imageItem.download_url}
                  alt={imageItem.url}
                  className={`rounded-2xl shadow-cyan-200 shadow-xl ${currentSlide !== index ? "h-0" : ""}`}
                />
              ))
            : "No data found"}
          <BsArrowRightCircleFill
            className="absolute w-7 h-7 text-white drop-shadow-gray-200 right-4"
            onClick={() => handleNextSlide()}
          />
          <span className="flex justify-center items-center absolute bottom-4">
            {images && images.length > 0
              ? images.map((_, index) => (
                  <button
                    key={index}
                    className={`current-indicator  w-2 h-2 rounded-2xl mx-1 my-auto cursor-pointer ${currentSlide === index ? "bg-white" : "bg-gray-400"}`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))
              : null}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
