import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast"
import { clearCart } from '../redux/Slices/CartSlice';
import {useNavigate} from "react-router-dom";

const CartSummary = () => {

    const {cart} = useSelector( (state)=> state);
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    useEffect( ()=>{
        setTotalAmount(cart.reduce( (acc,curr)=> acc + curr.price,0));
    } ,[cart])

    function checkOutHandler(){
        toast.success("Your order is placed successfully..!");
        dispatch(clearCart());
        navigate("/");
    }

    return (
        <div class="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
            <h3 class="text-xl font-extrabold [#333] border-b pb-3">Order Summary</h3>
            <ul class="text-[#333] text-sm divide-y mt-6">
                <li class="flex flex-wrap gap-4 py-3">Subtotal <span class="ml-auto font-bold">{totalAmount}</span></li>
                <li class="flex flex-wrap gap-4 py-3">Shipping <span class="ml-auto font-bold">Free</span></li>
                <li class="flex flex-wrap gap-4 py-3">Total Products<span class="ml-auto font-bold">{cart.length}</span></li>
                <li class="flex flex-wrap gap-4 py-3 font-bold">Total <span class="ml-auto">${totalAmount}</span></li>
            </ul>
            <button type="button" class="mt-6 text-sm px-6 py-2.5 w-full bg-[#333] hover:bg-[#111] text-white rounded-md"
                onClick={()=>checkOutHandler()}
            >Check out</button>

            <div class="mt-6 space-y-6">
                <div>
                    <h4 class="text-base font-bold [#333] mb-2">Secure payment</h4>
                    <p class="text-sm text-[#333]">Experience peace of mind with our secure payment options, ensuring your transactions are protected and reliable.</p>
                </div>
                <div>
                    <h4 class="text-base font-bold [#333] mb-2">Free delivery</h4>
                    <p class="text-sm text-[#333]">Enjoy the convenience of free delivery on all your orders, providing a cost-effective and seamless shopping experience.</p>
                </div>
                <div>
                    <h4 class="text-base font-bold [#333] mb-2">Easy to return</h4>
                    <p class="text-sm text-[#333]">Simplify your shopping experience with hassle-free returns. Our easy return process ensures convenience and customer satisfaction.</p>
                </div>
            </div>
        </div>
    )
}

export default CartSummary;
