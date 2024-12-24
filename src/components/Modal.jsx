import React, { useState } from "react";

const Modal = ({ onClose, onSubmit }) => {
  const [repoData, setRepoData] = useState({
    name: "",
    visibility: "Private",
    language: "",
  });

  const randomSize = Math.floor(Math.random() * 500) + 1;
  const randomDays = Math.floor(Math.random() * 30) + 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if (!repoData.name || !repoData.language) {
      alert("Please fill in all fields.");
      return;
    }
    const completeRepoData = {
      ...repoData,
      size: randomSize,
      lastUpdated: `${randomDays} days ago`,
    };
    onSubmit(completeRepoData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[40%] rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Entry</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={repoData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Visibility</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="visibility"
                  value="Private"
                  checked={repoData.visibility === "Private"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Private
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="visibility"
                  value="Public"
                  checked={repoData.visibility === "Public"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Public
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="language">
              Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={repoData.language}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2"
              placeholder="Enter language"
            />
          </div>

          <div>
            <p className="text-sm text-gray-700">
              <span className="font-bold">Size:</span> {randomSize} KB
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-bold">Last Updated:</span> {randomDays} days ago
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="ml-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
