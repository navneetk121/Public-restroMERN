import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { FaCircle } from 'react-icons/fa';

const categoryMap = {
  all: 'All',
  a: 'Soup',
  b: 'Starters',
  c: 'Main Course',
  d: 'Rice',
  e: 'Bread',
  f: 'Extras',
};

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Track selected category, default to 'All'
  const [showVegetarian, setShowVegetarian] = useState(false);

  useEffect(() => {
    Axios.get('https://public-restro-api.vercel.app/api/v1/food')
      .then(response => {
        setFoods(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching food:', error);
        setLoading(false);
      });
  }, []);

  const toggleShowVegetarian = () => {
    setShowVegetarian(!showVegetarian);
  };

  const handleToggleCategory = (categoryCode) => {
    setSelectedCategory(categoryCode);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 font-serif">Food Menu</h1>

      {/* Filter button for vegetarian only */}
      <div className="flex justify-center mb-4">
        <button
          className={`py-2 px-4 rounded-lg ${showVegetarian ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'} font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition-colors`}
          onClick={toggleShowVegetarian}
        >
          Click Here for Veg-Only
        </button>
      </div>

      {/* Category selection dropdowns */}
      <div className="flex gap-4 mb-4 justify-center">
        {Object.keys(categoryMap).map(categoryCode => (
          <button
            key={categoryCode}
            className={`py-2 px-4 rounded-lg ${selectedCategory === categoryCode ? 'bg-gray-300 text-gray-900' : 'bg-gray-200 text-gray-800'} font-semibold shadow-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition-colors`}
            onClick={() => handleToggleCategory(categoryCode)}
          >
            {categoryMap[categoryCode]}
          </button>
        ))}
      </div>

      {/* Display food items based on selected category and filter */}
      {loading ? (
        <p className="text-center text-2xl text-gray-600 font-serif">Loading food...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foods
            .filter(food => selectedCategory === 'all' || food.categoryCode === selectedCategory)
            .filter(food => !showVegetarian || food.veg) // Filter out non-vegetarian dishes if showVegetarian is true
            .map(food => (
              <div key={food._id} className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <FaCircle
                  className={`mr-4 ${food.veg ? 'text-green-600' : 'text-red-600'}`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-700 font-serif">{food.name}</h3>
                </div>
                <p className="text-lg font-semibold text-gray-800 font-serif">₹{food.cost}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Food;
