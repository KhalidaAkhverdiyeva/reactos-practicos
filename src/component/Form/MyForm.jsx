import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyForm = ({addUser}) => {

  const [formData, setFormData] = useState({
    name: '',
    image: null,
    function: '',
    review: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      if (files[0]) {
        const previewUrl = URL.createObjectURL(files[0]);
        setImagePreview(previewUrl);
      } else {
        setImagePreview(null);
      }
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: crypto.randomUUID() };
    addUser(newUser);
    setFormData({
      name: '',
      image: null,
      function: '',
      review: '',
      email: '',
      date: ''
    });
    navigate('/');

    console.log(formData);
  };

  return (
    <div className=" p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image and Name */}
          <div className="flex items-center space-x-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              <span className="block text-gray-600">Image</span>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              <span className="block text-gray-600">Name</span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Function */}
          <div>
            <label htmlFor="function" className="block text-sm font-medium text-gray-700">
              Function
              <input
                type="text"
                id="function"
                name="function"
                value={formData.function}
                onChange={handleChange}
                className="mt-1 block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Review</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="review"
                  value="positive"
                  checked={formData.review === 'positive'}
                  onChange={handleChange}
                  className=" form-radio text-blue-600"
                />
                <span className="ml-2">Positive</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="review"
                  value="neutral"
                  checked={formData.review === 'neutral'}
                  onChange={handleChange}
                  className="form-radio text-gray-600"
                />
                <span className="ml-2">Neutral</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="review"
                  value="negative"
                  checked={formData.review === 'negative'}
                  onChange={handleChange}
                  className="form-radio text-red-600"
                />
                <span className="ml-2">Negative</span>
              </label>
            </div>
          </div>

          {/* Date */}

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
