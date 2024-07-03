import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { FaCircle } from 'react-icons/fa';

const categoryMap = {
  all: 'All',
  a: 'Fruit Juices',
  b: 'Shakes',
  c: 'Coffee',
  d: 'Soda',
};

const Beverage = () => {
  const [beverages, setBeverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Track selected category, default to 'All'

  useEffect(() => {
    Axios.get('https://public-restro-api.vercel.app/api/v1/beverages')
      .then(response => {
        setBeverages(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching beverages:', error);
        setLoading(false);
      });
  }, []);

  const handleToggleCategory = (categoryCode) => {
    // Toggle selected category
    setSelectedCategory(categoryCode);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 font-serif">Beverage Menu</h1>

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

      {/* Display beverage items based on selected category */}
      {loading ? (
        <p className="text-center text-2xl text-gray-600 font-serif">Loading beverages...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beverages
            .filter(beverage => selectedCategory === 'all' || beverage.categoryCode === selectedCategory)
            .map(beverage => (
              <div key={beverage._id} className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <FaCircle
                  className={`mr-4 ${beverage.veg ? 'text-green-600' : 'text-maroon-600'}`}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-700 font-serif">{beverage.name}</h3>
                </div>
                <p className="text-lg font-semibold text-gray-800 font-serif">₹{beverage.cost}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Beverage;
