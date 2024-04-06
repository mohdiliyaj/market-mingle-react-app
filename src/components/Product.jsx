import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast"
import {add, remove} from "../redux/Slices/CartSlice"


const Product = ({ product }) => {
  const [readmore, setReadmore] = useState(false);
  const desc = readmore ? product.description : product.description.substring(0, 100) + "...";

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function removeHandler() {
    dispatch(remove(product.id))
    toast.error("Item removed from the cart")
  }
  function addHandler() {
    dispatch(add(product))
    toast.success("Item added to cart")
  }

  return (
    <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" style={{ height: "400px" }}>
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <img className="p-8 rounded-t-lg" src={product.image} alt="product image" style={{
            width: '200px',
            height: '200px'
          }} />
        </div>
        <div className="px-4 pb-5">
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="text-xs">
            {desc}
            <span className='text-blue-400 cursor-pointer' onClick={() => setReadmore(!readmore)}> {readmore ?
              'show less' : 'read more'} </span>
          </p>
          <div className="flex items-center justify-between mt-2.5">
            <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <span
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 flex flex-row">
              {product.rating.rate}
              <FaStar className="ml-1" />
            </span>
          </div>
          <div className="text-end mb-2">
            <span className="text-slate-500 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800">
              {product.rating.count} Reviews
            </span>
          </div>
          <div>
            {
              cart.some((p) => p.id == product.id) ?
                (
                  <button
                    onClick={removeHandler}
                    class="block w-full relative inline-flex items-center justify-center px-12 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">
                      Remove from cart
                    </span>
                  </button>
                ) :
                (
                  <button
                    onClick={addHandler} 
                    class="block w-full relative inline-flex items-center justify-center px-12 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">
                      Add to cart
                    </span>
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
