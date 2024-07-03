import React from 'react';
import { Link } from 'react-router-dom';
import Food from '../assets/food.jpg';
import Beverage from '../assets/beverage.jpg';
import Dessert from '../assets/dessert.jpg';
import Update from '../assets/update.jpg';
import './Menu.css'; // Assuming you have a CSS file for additional styles

const Menu = () => {
  return (
    <div className="menu-container">
      <div className='menu-item'>
        <Link to="/food">
          <img src={Food} alt="Food" className="menu-image" />
          <p className='menu-text py-1'>Food</p>
        </Link>
      </div>
      <div className='menu-item'>
        <Link to="/beverages">
          <img src={Beverage} alt="Beverage" className="menu-image" />
          <p className='menu-text'>Beverage</p>
        </Link>
      </div>
      <div className='menu-item'>
        <Link to="/desserts">
          <img src={Dessert} alt="Dessert" className="menu-image" />
          <p className='menu-text'>Dessert</p>
        </Link>
      </div>
      {/* <div className='menu-item'>
        <img src={Update} alt="Update" className="menu-image" />
        <p className='menu-text'>Update</p>
      </div> */}
    </div>
  );
};

export default Menu;
