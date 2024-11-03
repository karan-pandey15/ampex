// ImageUploadForm.js
"use client"
import React, { useState } from "react";

const ImageUploadForm = ({ onUpload }) => {
  const [images, setImages] = useState([null, null, null]);

  const handleFileChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    const response = await fetch("http://localhost:3001/api/upload-images", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const imageUrls = await response.json();
      onUpload(imageUrls);
    } else {
      console.error("Image upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <label htmlFor={`image${index + 1}`}>Upload Image {index + 1}</label>
          <input
            type="file"
            id={`image${index + 1}`}
            onChange={(e) => handleFileChange(e, index)}
          />
        </div>
      ))}
      <button type="submit">Upload Images</button>
    </form>
  );
};

export default ImageUploadForm;
