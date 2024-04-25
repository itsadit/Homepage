import React from 'react'
import pic from "./images.jpeg"
const Category = () => {
  return (
    <div>
    <div className='border mb-1 mr-1 bg-white  rounded-md h-11 ml-1 p-1'>
        <h1 className='text-[#0d7a81] text-2xl font-bold'>SHOP BY CATEGORY</h1>
      </div>
    <div className='bg-white justify-around shadow-sm py-2'>
      <div className='text-center text-teal-500 font-semibold mt-1'>
        <h2>Beverages</h2>
      </div>
      <hr class="w-1/2 border-1.5 border-gray-800 bg-gray-800 mx-auto"></hr>

      <div className='w-1/2 ml-2 border-2 shadow-md rounded-md mt-1'>
        <img className="object-scale-down h-40 w-40 mt-1 ml-2 bg-white rounded-md" src={pic} alt='mango'></img>
        <div class="ml-2">
          <h2 className='font-bold'>Cold Drinks</h2>
          <div className='flex '><h2>UP TO </h2><h2 className="text-[#ff0000]"> 10% off</h2></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Category;