/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FeatureRoomCard = ({ room }) => {
    const { name,
          description,
          image,
          pricePerNight,
          _id


    } = room;



    return (

        <div
        
       
        className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">

            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-[#3665b8]  uppercase dark:text-white jost-600">{name}</h1>
                <p className="mt-1 text-sm font-500 text-[#eb865e] dark:text-gray-400">{description}</p>
            </div>

            <img className="object-cover w-full h-48 mt-2" src={image} alt="rooms_pic" />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">

                <h1 className="text-lg font-bold text-white">${pricePerNight}</h1>

                <Link to={`/room-details/${_id}`} className="px-2 py-1 text-xs font-semibold hover:bg-[#ff4338]  text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:text-white focus:bg-gray-400 focus:outline-none">Book Now</Link>
            </div>

        </div>
    );
};

export default FeatureRoomCard;