import { Link, useLoaderData } from "react-router-dom";


const RoomDetails = () => {
    const room = useLoaderData();

    const {
        name,
        description,
        pricePerNight,
        availability,
        image,
        roomSize,
        specialOffers

    } = room || {};

    console.log(room);
    return (

        
        <div className="mb-4 mt-4">
            <div className=" container mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img
                    className="object-cover w-full"
                    src={image}
                    alt="Article"
                />

                <div className="p-6">

                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <a
                            href="#"
                            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                            tabIndex="0"
                            role="link"
                        >
                            {name}
                        </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">


                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>

                    </div>
                   


                </div>

                <div>
                        <Link to='/login' className="px-6 py-2 font-medium tracking-wide border border-[#ff4338] text-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform    hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80  font-600" > Book Now</Link>
                    </div>


            </div>
        </div>
    );
};

export default RoomDetails;