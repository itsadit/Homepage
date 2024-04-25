import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { BsChatText } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
const Footer = () => {
  return (
    <div className="footer grid bg-[#fafafa] mt-1 mb-1">
      <div className="flex justify-around">
        <IoHome size={30} className="fill-teal-500"/>
        <MdOutlinePeopleAlt size={30} className="fill-teal-500"/>
        <GiFruitBowl className="mr-2 fill-teal-500" size={30}/>
        <RiFileList3Line size={30} className="fill-teal-500"/>
        <BsChatText size={30} className="fill-teal-500"/>
      </div>
      <div className="flex justify-around">
        <h3>Home</h3>
        <h3>profile</h3>
        <h3>Fruits</h3>
        <h3>Follow list</h3>
        <h3 className="mr-1">chat</h3>
      </div>
    </div>
  );
};

export default Footer;