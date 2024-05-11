import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";


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
    console.log(booking);




    return (
        <div>
            Bookings
        </div>
    );
};

export default MyBookings;