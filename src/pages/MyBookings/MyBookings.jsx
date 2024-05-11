import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`)
            setBooking(data);
        }


        getData()
    }, [user])
    // console.log(booking);




    return (
        <div className="container lg:w-full md:w-full w-96  mx-auto mb-4">

            <div>
                <h2 className="text-4xl text-center sora-500 mb-4 mt-4 underline">My Booking Lists</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table-auto w-full">
                    <thead className="sora-500">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Room Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Cancel</th>
                            <th className="px-4 py-2">Update</th>
                        </tr>
                    </thead>
                    <tbody className="sora-400">
                        {booking.map((item, index) => (
                            <tr className="hover:bg-[#ff4338] hover:text-white" key={item._id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.roomName}</td>
                                <td className="border px-4 py-2">{item.
                                    roomDetails}</td>
                                <td className="border px-4 py-2 flex items-center">{item.price} <FaDollarSign></FaDollarSign> </td>
                                <td className="border px-4 py-2">{item.
                                    date}</td>
                                <td className="border px-4 py-2">{item.stockStatus}</td>
                                <td className="border px-4 py-2">
                                    <Link to={`/view_details/${item._id}`}>
                                        <button className="link">View Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;