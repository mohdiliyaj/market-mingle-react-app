import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice"
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";


const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  return (
    <div class="lg:col-span-2 space-y-6">
      <div class="p-2 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
        <div class="grid sm:grid-cols-2 items-center gap-4">
          <div class="w-full h-full py-3 px-6 shrink-0 bg-white-100">
            <img src={item.image} class="w-full h-full object-contain" />
          </div>
          <div class="px-4 py-4">
            <h3 class="text-xl font-bold text-[#333]">{item.title}</h3>
            <hr class="my-3" />
            <p class="text-sm text-[#333]">
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">${item.price}</span>
              <span
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 flex flex-row">
                {item.rating.rate}
                <FaStar className="ml-1" />
              </span>
            </div>
            <div class="flex justify-end">
              <div>
                <h4 class="text-sm text-slate-400">{item.rating.count} reviews</h4>
              </div>
            </div>
            <div class="w-full mt-4 text-center">
              <button type="button" class="w-full rounded-lg bg-slate-300 font-semibold text-gray-500 flex flex-wrap justify-center py-2 items-center"
                onClick={removeHandler}
              >
                <MdDelete size={"20px"} />
                <span>Remove from cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
