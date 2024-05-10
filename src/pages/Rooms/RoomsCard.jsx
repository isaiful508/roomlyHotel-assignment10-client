/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const RoomsCard = ({room}) => {
    const {name,image,_id,  pricePerNight, availability} = room;
    return (
        <Link to={`/room-details/${_id}`}
        className="card border-2 w-96 bg-base-100 shadow-lg">
        <figure>
            <img src={image} alt="Shoes" />
            </figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price Per Night:  {pricePerNight}$</p>
          <p>Availability: {availability}</p>
          
        </div>

      </Link>
    );
};

export default RoomsCard;