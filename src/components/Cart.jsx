import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()

    const clearAll=()=>{
        dispatch(clearCart())
    }
    return(
        <div>

            <div className="w-6/12 m-auto my-20">
            <button className="bg-black text-white rounded ml-40" onClick={clearAll}>Clear All</button>

             <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;