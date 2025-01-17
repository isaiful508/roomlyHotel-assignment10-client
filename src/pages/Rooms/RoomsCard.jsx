/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";


const RoomsCard = ({ room }) => {
  const { name, image, _id, pricePerNight, availability} = room;

  const [reviews, setReviews] = useState("")
  
  const availabilityColor = availability === 'Available' ? 'text-green-700' : 'text-red-700';


  useEffect(() => {


    getData();

}, [])
const getData = async () => {
    const { data } = await axios(`https://roomly-server-assignment11.vercel.app/reviews/${_id}`)
    setReviews(data);
}
// console.log(reviews);




  return (
    <Link to={`/room-details/${_id}`}
      className="card border-2 w-96 bg-base-100 shadow-lg">
         <a className="px-3 absolute py-1 text-sm font-500 text-gray-100 transition-colors duration-300 transform bg-[#ff4338] rounded cursor-pointer hover:bg-gray-500" role="button"> {pricePerNight} $ Per Night</a>

      <figure>
        <img src={image} alt="room" />
       
      </figure>

      <div className= "p-6">
        <h2 className="text-xl card-title bona-nova-regular">{name}</h2>
        <p> </p>
        <button className="font-500" >Status: <span className={` rounded-full p-2  font-400 text-xl font-semibold ${availabilityColor}`}>{availability}</span></button>

        <div className="font-500">
        {
        reviews && <div className="flex items-center gap-2"><p>Total Reviews: {reviews?.length}</p>
        <FcRating></FcRating></div>
        }
             
        </div>
      </div>

    </Link>
  );
};

export default RoomsCard;