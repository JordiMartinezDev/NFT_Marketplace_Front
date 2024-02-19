"use client";
import React, { useState } from "react";

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

const onSubmit = (formData: FormData) => {
  // Handle form submission here
  console.log(formData);
};

const CreateCollectionForm = () => {
  const [formData, setFormData] = useState({} as FormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="collectionName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Collection Name
        </label>
        <input
          type="text"
          id="collectionName"
          name="collectionName"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter collection's name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="numNFTs"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Number of NFTs in the Collection
        </label>
        <input
          type="text"
          id="numNFTs"
          name="numNFTs"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter number of NFTs"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="creatorFee"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Creator Fee in %
        </label>
        <input
          type="number"
          id="creatorFee"
          name="creatorFee"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter creator's fee in %"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          accept="image/*"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateCollectionForm;
