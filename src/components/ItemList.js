import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    console.log(items);
    // console.log(items);
    

    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        // dispatch an action
        dispatch(addItem(item));
      
    }
    return(
    <div >
        
            {items.map((item) => (
                <div key={item.card.info.id} className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-800 shadow-lg">
                <div className="w-9/12"> 
                <div className="py-2"><span>{item.card.info.name}</span><span>- ₹ {item.card.info.price ? item.card.info.price/100:item.card.info.defaultprice/100}</span></div>
                   <p className="text-xs break-words">{item.card.info.description}</p>
                   </div>
                   <div className="w-3/12 p-4">                    
                       <div className="absolute">
                        <button className="px-2 mx-16 text-white bg-gray-500 rounded-lg shadow-lg text-bold" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                        <img  className="w-full" src={CDN_URL+item.card.info.imageId}/>
                        </div>
                </div>
            ))}
         
    </div>);
}
export default ItemList;