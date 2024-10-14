'use client'

import {useState, useRef } from "react";
export default function ImageUpload({ onFileSelect }) {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null); // Reference to reset the input field

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a preview URL
      setImagePreview(imageUrl); // Set preview
      onFileSelect(file); // Pass the file to the parent component
    }
  };

  const onCancelFile = (e) => {
    e.preventDefault();
    setImagePreview(null); // Clear the preview
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="profile-container h-fit">
      <div className="">
      <h3 className="font-semibold text-regal">Profile picture</h3>
        {imagePreview ? (
          <div className="">
            <img
              className="inline-block h-60 w-60 rounded-full"
              alt="file uploader preview"
              objectFit="cover"
              src={imagePreview}
              width={240}
              height={240}
              layout="fixed"
            />
          </div>
        ) : (
          <label className="hover:cursor-pointer h-60 w-60 rounded-full border-dashed border-2 flex justify-center">
            <p className="flex items-center">Upload Image</p>
            <input
              name="file"
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
          </label>
        )}
      </div>
      <div >
        <button
          className="my-4 border border-regal px-4 py-2 rounded-lg"
          disabled={!imagePreview}
          onClick={onCancelFile}
        >
          Cancel file
        </button>
      </div>
    </div>
  );
};