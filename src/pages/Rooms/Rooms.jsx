import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";



const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [selectedRange, setSelectedRange] = useState("");
    const [search, setSearch] = useState('');



    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("https://roomly-server-assignment11.vercel.app/rooms", {
                params: {
                    minPrice: selectedRange ? selectedRange.split("-")[0] : undefined,
                    maxPrice: selectedRange ? selectedRange.split("-")[1] : undefined,
                    search: search || undefined
                }
            });
            setRooms(response.data);
        };
        getData();
    }, [selectedRange, search]);




    const handleFilterChange = (event) => {
        setSelectedRange(event.target.value);
    };


    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);

    };




    return (
        <div className="container mx-auto">

            <div className="flex justify-between items-center mt-6 mb-4">
                <div className=" text-black  mt-10 font-500">

                    <form onSubmit={handleSearch}>

                        <input className="rounded-md border border-[#ff4338] py-2 px-6" placeholder="Search Rooms" type="text" name="search" />

                        <input className="px-6 ml-2 py-2 tracking-wide text-[#ff4338] rounded-md  font-normal font-400  border border-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform bg-[]  hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" type="submit" value="Search" />

                    </form>

                </div>

                <div>
                    <div className="font-500">

                        <select className="border-2 p-2 rounded-lg " onChange={handleFilterChange}>
                            <option value="">Filter By Price</option>
                            <option value="100-200">100-200</option>
                            <option value="200-500">200-500</option>
                            {/* Add more options for other price ranges */}
                        </select>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 mb-8">
                <h2 className="lg:text-5xl text-2xl bona-nova-regular">Discover Tranquility in <br /> Our <span className="text-[#ff4338]">Roomly</span> Hotel Rooms</h2>

                <p className="mt-4 font-400">Whether you’re a globetrotting adventurer, a business executive on the go, or a leisure traveler seeking a peaceful retreat, <br /> our airport rooms provide a perfect oasis within your journey.</p>
            </div>


            <div className=" grid border-2 rounded-lg p-4  md:gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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