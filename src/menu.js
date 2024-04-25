import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
const Menu = () => {
    return (
        <div className="grid grid-cols-1 h-28 mt-3 mb-3 ml-1 mr-1 bg-white rounded-md">
            <div className='relative  px-2 flex items-center space-x-10 justify-around'>
                <FaMobileAlt style={{ fill: '#429da6' }} size={35} />
                <FaRegNewspaper size={35} style={{ fill: '#429da6' }} />
                <BsPeopleFill size={35} style={{ fill: '#429da6' }} />
                <GiElectric size={35} style={{ fill: '#429da6' }} />
            </div>
            <div className=" px-1 font-bold text-[#0d7981dd] relative flex text-xs text-center space-x-10 h-fit justify-around">
                <div>
                    <h2>Mobile<br />Recharge</h2>
                </div>
                <div className='pr-2'>
                    <h2>News</h2>
                </div>
                <div >
                    <h2>Jobs</h2>
                </div>
                <div>
                    <h2>Electricity<br />Bill</h2>
                </div>
            </div>
        </div>
    )
}

export default Menu;