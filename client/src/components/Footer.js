import React from "react";
import logo from "../assets/footer_logo.png";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
      <img src={logo} className="mb-2 w-25" alt="Footer Logo" />
      <div className="mb-4 text-black bg-white p-1">
        <p className="text-sm">Indoor Sitting | Takeaway | Home Delivery</p>
      </div>
      <h2 className="text-xl font-bold mb-2">Average Cost</h2>
      <p>INR 800 for two people (approx)</p>
      <h1 className="text-xl font-bold mt-8 mb-2">OPENING HOURS</h1>
      
      <table className="align-center">
         <tbody>
            <tr>
                <td>
                    <span>Monday</span>
                </td>
                <td  className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td >
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Tuesday</span>
                </td>
                <td className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td>
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Wednesday</span>
                </td>
                <td className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td>
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Thursday</span>
                </td>
                <td className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td>
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Friday</span>
                </td>
                <td className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td>
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Saturday</span>
                </td>
                <td className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td>
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Sunday</span>
                </td>
                <td className="pl-4 pr-4">
                    <span>:</span>
                </td>
                <td>
                    <span>12:30 PM - 11:15 PM</span>
                </td>
            </tr>
         </tbody>
      </table>
      
      {/* <p>Monday     :    12:30PM - 11:15PM</p>
      <p>Tuesday    :    12:30PM - 11:15PM</p>
      <p>Wednesday  :    12:30PM - 11:15PM</p>
      <p>Thursday   :    12:30PM - 11:15PM</p>
      <p>Friday     :    12:30PM - 11:15PM</p>
      <p>Saturday   :    12:30PM - 11:15PM</p>
      <p>Sunday     :    12:30PM - 11:15PM</p>  */}
      <hr className="my-4 border-t border-white w-full" />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">CONTACT US</h1>
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center mb-2">
            <IoIosMail className="mr-2 text-2xl" />
            syed.publichouse@gmail.com
          </div>
          <div className="flex items-center mb-2">
            <FaWhatsapp className="mr-2 text-2xl" />
            Whatsapp: +91 7999192203
          </div>
          <div className="flex items-center">
            <CiLocationOn className="mr-2  text-3xl" />
            Lower ground floor, Mahadev Complex 7, Service Road, Opposite to MP board Office,
            Shivaji Nagar Bhopal, Madhya Pradesh 462016
          </div>
        </div>
        <div> 
        <h1 className="text-xl font-bold mt-8 mb-2">FOLLOW US</h1>
        <div className="flex items-center justify-center">
          <CiFacebook className="mr-2  text-2xl" />
          <FaInstagram className=" text-2xl"/>
        </div>
        </div>
      </div>
      <hr className="my-3 border-t border-white w-full" />
      <p className="text-gray-300 text-sm mt-2">@copyright 2021 The Public House Powered by UpSale Suite</p>
    </div>
  );
};

export default Footer;