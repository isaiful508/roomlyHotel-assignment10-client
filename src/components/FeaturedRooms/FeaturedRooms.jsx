

import { useLoaderData } from "react-router-dom";
import FeatureRoomCard from "./FeatureRoomCard";


const FeaturedRooms = () => {
   
    const featuresRooms = useLoaderData();
    const fourRooms = featuresRooms.slice(0, 4)
    // console.log(fourRooms);

  

    return (
        <div
        data-aos="zoom-in"
        
        data-aos-duration="1000"

        className="container lg:w-full md:w-full w-96 mx-auto mt-10 mb-10">
            <div className="text-center mb-6 ml-8 p-4 lg:p-4 ">
                <h2 className="text-4xl text-[#3665b8]  jost-600">Features Rooms</h2>
                <p className="sora-500 mt-2 font-500 text-[#eb865e]">Here are the special roms for Out importand customers.Lets take a look</p>
            </div>
            <div className=" grid  rounded-lg p-4  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    
                    fourRooms.map(room => <FeatureRoomCard
                  key={room._id}
                  room={room}
                  ></FeatureRoomCard>)  
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;