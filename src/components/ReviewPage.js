import React, { useState } from "react";
import linkdln1 from "../assets/linkedlnReviews/1.webp";
import linkdln2 from "../assets/linkedlnReviews/2.webp";
import linkdln3 from "../assets/linkedlnReviews/3.webp";
import linkdln4 from "../assets/linkedlnReviews/4.webp";
import linkdln5 from "../assets/linkedlnReviews/5.webp";
import linkdln6 from "../assets/linkedlnReviews/6.webp";
import linkdln7 from "../assets/linkedlnReviews/7.webp";
import linkdln8 from "../assets/linkedlnReviews/8.webp";
import linkdln9 from "../assets/linkedlnReviews/9.webp";
import linkdln10 from "../assets/linkedlnReviews/10.webp";

const ReviewPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const images = [
    linkdln1,
    linkdln2,
    linkdln3,
    linkdln4,
    linkdln5,
    linkdln6,
    linkdln7,
    linkdln8,
    linkdln9,
    linkdln10,
  ];

  const previousImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const nextImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex === images.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <button className="prev-button" onClick={previousImages}>
        &lt;
      </button>
      <button className="next-button" onClick={nextImages}>
        &gt;
      </button>
      <div className="Review-page">
        <div className="image-container">
          {images.slice(startIndex, startIndex + 2).map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
