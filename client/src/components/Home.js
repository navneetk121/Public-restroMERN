import React from 'react'
import Giphy from "../assets/ph-1.gif";
import Buffet from "../assets/ph-offer.jpeg";
import Menu from "../components/Menu";
import Ambience from "../components/Ambience";

const Home = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
          <img src={Giphy} alt="My Image" className="max-w-full h-auto mb-4" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Buffet} alt="Buffet" className="w-1/2 h-auto mb-4" />
        </div>
        <div>
          <h1 className="flex justify-center items-center text-6xl font-bold mb-4 mt-6">Our Menu</h1>
          <Menu />
        </div>
        <div>
          <h1 className="flex justify-center items-center text-6xl font-bold mb-4">Gallery</h1>
          <Ambience />
        </div>
        <div className="text-center">
          <h1 className="flex justify-center items-center text-6xl font-bold mb-4 mt-6">About Us</h1>
          <p className="flex items-center justify-center text-l ml-12 mr-12">
            An Urban style, retro theme restaurant offering wide range of dishes in Continental, Chinese, Indian, Tandoor, Mexican and Lebanese cuisine. Also enjoy freshly brewed coffee, shakes & mocktails at this family restaurant and cafe.
          </p>
        </div>
        <div>
          <h1 className="flex justify-center items-center text-6xl font-bold mb-4 mt-6">Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.345147693677!2d77.42837037387338!3d23.230524108538674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425deee170e1%3A0x5cbbb336a4ea976d!2sThe%20Public%20House%20Restaurant!5e0!3m2!1sen!2sin!4v1706433204593!5m2!1sen!2sin"
            className="mt-8 mb-3"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  )
}

export default Home
