import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import BookingsLists from "./BookingsLists";



const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    useEffect(() => {


        getData();

    }, [user])
    const getData = async () => {
        const { data } = await axios(`http://localhost:5000/bookings/${user?.email}`,{withCredentials: true} )
        setBooking(data);
    }



    return (
        <div className="container lg:w-full md:w-full w-96  mx-auto mb-4">

            <div>
                <h2 className="text-4xl bona-nova-regular text-center  mb-10 mt-4 ">My Booking Lists</h2>
            </div>
            <div className="overflow-x-auto font-600 border">
                <table className="table-auto w-full">

                    <thead>

                        <tr >
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

                    <tbody className="">
                        {booking.map((item, index) => <BookingsLists
                            key={item._id}
                            item={(item)}
                            index={index}
                            booking={booking}
                            setBooking={setBooking}
                        ></BookingsLists>)}
                    </tbody>
                </table>




            </div>
        </div>
    );
};

export default MyBookings;