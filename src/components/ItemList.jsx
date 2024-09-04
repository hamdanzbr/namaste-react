import { useDispatch } from "react-redux";
import { foodImage } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch=useDispatch()

  const handleAdd=(item)=>{
    dispatch(addItems(item))
  }

  
   
  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="flex items-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                className="w-14 h-14 object-cover rounded-lg"
                src={foodImage}
                alt="Food item"
              />
              <button className="absolute bottom-0 right-0 bg-black text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600 transition" onClick={()=>handleAdd(item)}>
                Add+
              </button>
            </div>

            {/* Item Details Section */}
            <div className="flex-grow ml-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg text-gray-800">
                  {item.card.info.name}
                </span>
                <span className="font-semibold text-gray-700">
                  ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </span>
              </div>
              {/* Veg/Non-Veg Indicator */}
              <p className="text-sm mt-1 text-gray-500">
                {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
                  <span className="text-green-500">🟢 Veg</span>
                ) : (
                  <span className="text-red-500">🔴 Non-Veg</span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
