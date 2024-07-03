import React, { useState } from "react";
import shuffle from "lodash/shuffle";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import a8 from "../assets/a8.jpg";
import a9 from "../assets/a9.jpg";
import a10 from "../assets/a10.jpg";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";
import f8 from "../assets/f8.jpg";
import f9 from "../assets/f9.jpg";
import f10 from "../assets/f10.jpg";

const ambianceImages = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
const foodImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

const Ambience = () => {
  const [images, setImages] = useState(shuffle(ambianceImages).slice(0, 8));

  const showAmbiance = () => setImages(shuffle(ambianceImages).slice(0, 8));
  const showFood = () => setImages(shuffle(foodImages).slice(0, 8));

  function openHandler(){
    // Handle image click
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-gray-300 text-white rounded-lg mr-2"
          onClick={showAmbiance}
        >
          Show Ambiance
        </button>
        <button
          className="px-4 py-2 bg-cyan-300 text-white rounded-lg"
          onClick={showFood}
        >
          Show Food
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              onClick={openHandler}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ambience;
