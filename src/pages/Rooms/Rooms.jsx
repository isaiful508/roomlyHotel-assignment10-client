import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";



const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [selectedRange, setSelectedRange] = useState("");


    useEffect(() => {
        const getData = async () => {
          const response = await axios.get("http://localhost:5000/rooms", {
            params: selectedRange ? {
              minPrice: selectedRange.split("-")[0],
              maxPrice: selectedRange.split("-")[1]
            } : {}
          });
          setRooms(response.data);
        };
        getData();
      }, [selectedRange]);




    const handleFilterChange = (event) => {
        setSelectedRange(event.target.value);
    };

    







    return (
        <div className="container mx-auto">

            <div>
                <div className="flex justify-end mt-6 ">
                    
                <select className="border-2 p-2 rounded-lg" onChange={handleFilterChange}>
                    <option  value="">Filter By Price</option>
                    <option value="100-200">100-200</option>
                    <option value="200-500">200-500</option>
                    {/* Add more options for other price ranges */}
                </select>
                </div>
            </div>

            <div className="text-center mt-6 mb-8">
                <h2 className="text-5xl bona-nova-regular">Discover Tranquility in <br /> Our <span className="text-[#ff4338]">Roomly</span> Hotel Rooms</h2>

                <p className="mt-4 font-400">Whether you’re a globetrotting adventurer, a business executive on the go, or a leisure traveler seeking a peaceful retreat, <br /> our airport rooms provide a perfect oasis within your journey.</p>
            </div>


            <div className=" grid border-2 border-[] rounded-lg p-4  md:gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    rooms.map(room => <RoomsCard
                        key={room._id}
                        room={room}
                    ></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;