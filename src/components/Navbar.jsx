import React, { useState } from "react";
import Logomark from "../assets/Logomark.png";
import vector from "../assets/vector_down_arrow.png";
import search from "../assets/search_icon.png"
import cart from '../assets/cart.png'
import user from '../assets/user.png'

function Navbar() {
  const [category, setCategory] = useState("");
  return (
    <div className="lg:h-21 lg:mx-40 max-lg:mx-20 max-lg:h-10 max-sm:mx-5 flex items-center border-b-2 border-b-[#F6F6F6]">
      <div className="w-full lg:my-5 lg:h-11.25 flex justify-between ">
        <div className=" ml-3 my-[2.5px] w-160 h-10 flex gap-26 items-center">
          <div className="flex h-10 w-41 0 gap-3 items-center">
            <img src={Logomark} alt="" />
            <h2 className="manrope text-[#0E1422]">Ecommerce</h2>
          </div>

          <div className=" w-84.25 h-6.25 flex items-center gap-8">
            <h4 className="inter font-medium text-[#5C5F6A]">Home</h4>

            <div className="flex items-center gap-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-6 bg-transparent text-[#5C5F6A] outline-none"
              >
                <option value="">Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
            </div>

            <h4 className="inter font-medium text-[#5C5F6A]">About</h4>

            <h4 className="inter font-medium text-[#5C5F6A]">Contact</h4>
          </div>
        </div>
        <div className="mr-3 my-[2.5px] w-92.5 h-10 flex gap-8 items-center">
          <div
            className="w-60 h-full flex gap-2  items-center px-[15px] py-2 border border-[#E6E7E8] rounded-xs" 
          >
            <img src={search}  />
            <input 
              type="text"
              placeholder="Search products"
              className="h-[25px] w-[120px] text-[#5C5F6A]" 
            />
          </div>
          
            <img src={cart} alt=""/>
            <img src={user} alt="" />
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
