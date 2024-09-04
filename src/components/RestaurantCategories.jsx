import ItemList from "./ItemList";

const RestaurantCatogories = ({ data ,showItems,setShowIndex}) => {
//   const [showItems, setShowItems] = useState(false);

  const { title, itemCards } = data;

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Toggle button to expand/collapse the accordion */}
      <div className="flex justify-between items-center cursor-pointer" onClick={setShowIndex}>
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <button className={`animate-pulse transform transition-transform ${showItems ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </button>
      </div>

      
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCatogories;
