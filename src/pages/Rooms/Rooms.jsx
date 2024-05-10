import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";



const Rooms = () => {
    
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getData = async () =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
            setRooms(data);

        }
        getData();
    }, [])

    return (
        <div>
           <div className=" grid border-2 border-[] rounded-lg p-4  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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