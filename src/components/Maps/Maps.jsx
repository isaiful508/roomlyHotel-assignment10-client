
import { Map, Marker } from "pigeon-maps"
import { MdOutlineFlightLand } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";



const Maps = () => {
    return (
        <div className="my-10 mt-20 flex justify-between items-center gap-6 container mx-auto">
            <div className="text-[#3665b8]">
                <h2 className="text-5xl jost-600">HOW TO FIND OUR HOTEL</h2>
                <p className="font-400 mt-4">Let us be your hosts as you create cherished memories and discover <br /> the true essence of Cox Bazar. Book your stay with us today and open the door to a world of comfort, charm, and heartfelt hospitality.</p>

                <div className="flex mt-6 gap-4 text-[#eb865e]">
                    <div>
                        <MdOutlineFlightLand className="text-3xl mb-2"></MdOutlineFlightLand>
                        <h5 className="font-500">15 KILOMETRES FROM AIRPORT</h5>
                        <p className="font-400">The drive from The Airport to Hoteller Suites takes approximately 20 minutes.</p>
                    </div>
                    <div>
                        <RiHotelLine className="text-3xl mb-2"></RiHotelLine>
                        <h5 className="font-500">1.3 KILOMETRES FROM City Center</h5>
                        <p className="font-400">The drive from the city center to Hoteller Suites takes approximately 10 minutes.</p>
                    </div>
                </div>
            </div>


            <Map 
            
            
            
             defaultCenter={[21.433920, 91.987030]}
             defaultZoom={11}
            height={500}
              
               >
                <Marker width={200} anchor={[21.433920, 91.987030]} />
            </Map>



        </div>
    );
};

export default Maps;