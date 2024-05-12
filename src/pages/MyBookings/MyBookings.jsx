import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { FaDollarSign } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";


const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    


    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`)
            setBooking(data);
        }

        getData();
        
    }, [user])
    // console.log(booking);

    const handleCancel = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFB400",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/bookings/${id}`)
                    .then(response => {
                        const { data } = response;
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setBooking(prevBookings => prevBookings.filter(booking => booking._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting booking:', error);
                    });
            }
        })
    }




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
                            <th className="px-4 py-2">Post Review</th>
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
                                <td className="border px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>

                                <td className="border px-4 py-2 ">
                                  <TiDeleteOutline onClick={()=> handleCancel(item._id)} className="text-2xl "></TiDeleteOutline>
                                    
                                    </td>
                                <td className="border px-4 py-2">
                                   <FaRegEdit></FaRegEdit>
                                </td>
                                <td className="border px-4 py-2">
                                <button className="link">Post</button>
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