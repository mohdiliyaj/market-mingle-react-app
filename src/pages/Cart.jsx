import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import CartSummary from "../components/CartSummary";
import { NavLink } from "react-router-dom";

const Cart = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className="mt-12">
      <div class="font-[sans-serif] bg-gray-100 h-full">
        <div class="max-w-6xl mx-auto p-6">
          <h2 class="text-3xl font-bold text-[#333]">Your shopping bag</h2>
          {
            cart.length === 0 ?
              (
                <div className="w-full h-[79vh] flex justify-center items-center">
                  <div>
                    <p className="text-lg font-semibold">Your cart is empty! Add some items to your cart...!</p>
                    <NavLink to="/">
                      <button className="w-full block text-center mt-2 bg-indigo-500 rounded text-white font-semibold p-1">Shop Now</button>
                    </NavLink>
                  </div>
                </div>
              ) :
              (
                <div className="w-full flex flex-wrap justify-between">
                  <div class="w-8/12 grid lg:grid-cols-2 gap-12 relative mt-5">
                    {
                      cart.map((item) => {
                        return <CartItem key={item.id} item={item} />
                      })
                    }
                  </div>
                  <div className="w-3/12 mt-5">
                    <CartSummary />
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
