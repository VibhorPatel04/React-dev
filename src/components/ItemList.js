import {CDN_URl} from "../utils/constant"
const ItemList = ({ items }) => {
    return(
        <div>
            {
                items.map((item) => {
                    return(
                        <div className="mb-8  text-start p-3 w-6/12 mx-auto border-2 border-lightgray-500 rounded-lg">
                            <div className=" flex gap-2 justify-between items-center relative" key={item.card.info.id}>
                                <div>
                                    <h6 className="text-md font-bold">{item?.card?.info?.name}</h6>
                                    <p className="font-bold text-green-700">₹{item?.card?.info?.price/100}</p>
                                    <p className="mt-2">{item?.card?.info?.description}</p>
                                </div>
                                <img className="w-28 border-2 border-lightgray-500 bg-gray-200 rounded-lg" src={CDN_URl +item?.card?.info?.imageId} />
                                <button className="absolute right-4  me-2 mb-0  bottom-1 bg-black px-2.5 py-1 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm  focus:outline-none dark:focus:ring-blue-800">Add + </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default ItemList;